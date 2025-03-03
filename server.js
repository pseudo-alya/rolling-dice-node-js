const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Dice Roller API Endpoint
app.get('/roll-dice', (req, res) => {
  // Use query parameter 'sides' if provided, otherwise default to 6
  const sides = req.query.sides ? parseInt(req.query.sides) : 6;
  const roll = Math.floor(Math.random() * sides) + 1;
  res.json({ roll });
});

// Custom 404 page.
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Custom 500 error handler.
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('500 - Server Error');
});

app.listen(port, () => {
  console.log(`Express started at http://localhost:${port}`);
});
