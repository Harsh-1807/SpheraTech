const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// Fetch questions by category
router.get("/:category", async (req, res) => {
    try {
        const questions = await Question.find({ category: req.params.category });
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
