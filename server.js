const express = require("express");
const { initializeDatabase } = require("./config/db.connect");
const urlRoutes = require("./routes/urlRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());

initializeDatabase();

app.use("/", urlRoutes);

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 
