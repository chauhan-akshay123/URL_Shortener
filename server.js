const express = require("express");
const { initializeDatabase } = require("./config/db.connect");
const urlRoutes = require("./routes/urlRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());

initializeDatabase();

// Serve Static Files (Frontend)
app.use(express.static("public"));

// API Routes
app.use("/", urlRoutes);

const PORT = 5000;
app.listen(PORT, () => {
 console.log(`Server is running on PORT ${PORT}`);
});
