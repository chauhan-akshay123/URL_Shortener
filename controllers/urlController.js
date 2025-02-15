const Url = require("../models/Url");
const { v4: uuidv4 } = require("uuid"); // Import uuid

// Shorten URL
const shortenUrl = async (req, res) => {
    const { longUrl, customCode } = req.body;

    if (!longUrl) return res.status(400).json({ error: "URL is required" });

    let shortId = customCode || uuidv4().slice(0, 6); // Use custom code or generate one

    // Check if the custom code is already taken
    if (customCode) {
        const existingUrl = await Url.findOne({ shortId });
        if (existingUrl) {
            return res.status(400).json({ error: "Custom short code is already taken!" });
        }
    }

    const newUrl = new Url({ longUrl, shortId });
    await newUrl.save();

    const shortUrl = `${process.env.BASE_URL}/${shortId}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(shortUrl)}`;

    res.json({ shortUrl, qrCodeUrl });
};

module.exports = { shortenUrl };


// Redirect to original URL
const redirectUrl = async (req, res) => {
    const { shortId } = req.params;
    const urlEntry = await Url.findOne({ shortId });

    if (!urlEntry) return res.status(404).json({ error: "URL not found" });

    urlEntry.clicks++; // Track analytics
    await urlEntry.save();

    res.redirect(urlEntry.longUrl); // Redirect to the original URL
};

module.exports = { shortenUrl, redirectUrl };
