const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

//Only admin
router.get("/admin", verifyToken, (req, res) => {
    res.json({message: "Welcome Admin"})
})
//Both admin and manager can access router
router.get("/manager", verifyToken, (req, res) => {
    res.json({message: "Welcome Manager"})
})

//all can access this router
router.get("/user", verifyToken, (req, res) => {
    res.json({message: "Welcome User"})
})

module.exports = router;