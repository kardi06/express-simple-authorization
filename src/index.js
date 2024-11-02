const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");

dbConnect();
const app = express();

//middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
//START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});