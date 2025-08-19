const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files in the project folder (html, css, js, images, etc.)
app.use(express.static(__dirname));

// Default route → show bot.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "bot.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
