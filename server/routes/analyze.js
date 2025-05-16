const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { scriptText } = req.body;
  res.json({
    title: "Sample Title",
    genre: "Drama",
    logline: "A struggling writer discovers an AI that can predict film success.",
    matchedBuyers: ["Lifetime", "MarVista", "Reel One"]
  });
});

module.exports = router;
