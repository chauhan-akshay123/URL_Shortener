const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
 longUrl: {
    type: String,
    required: true
 },
 shortId: {
    type: String,
    unique: true,
    required: true
 },
 clicks: {
    type: Number,
    default: 0
 },
},
{ 
    timestamps: true
}
);

const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;