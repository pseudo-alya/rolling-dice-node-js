const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));

// Dice Roller API Endpoint
app.get("/roll-dice", (req, res) => {
  const sides = req.query.sides ? parseInt(req.query.sides) : 6;
  const roll = Math.floor(Math.random() * sides) + 1;
  res.json({ roll });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
