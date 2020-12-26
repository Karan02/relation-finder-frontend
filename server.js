const path = require("path");
const express = require("express");
require('dotenv').config();


const app = express();

delete process.env.BROWSER;

const buildPath = path.join(__dirname, 'build',"index.html");

app.use( express.static(path.join(__dirname, 'build')));



app.get('/',(req, res) => {
  res.sendFile(buildPath);
})
const PORT = 8082;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});