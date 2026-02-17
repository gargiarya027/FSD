const express = require("express");
const os = require("os");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes for system info
app.get("/total-memory", (req, res) => {
  res.json({ value: os.totalmem() });
});

app.get("/free-memory", (req, res) => {
  res.json({ value: os.freemem() });
});

app.get("/user-info", (req, res) => {
  res.json({ value: os.userInfo().username });
});

app.get("/cpu-arch", (req, res) => {
  res.json({ value: os.arch() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
