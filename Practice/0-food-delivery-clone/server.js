const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`server Working on port ${port}`);
});

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port ${port}`);
