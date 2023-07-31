const express = require("express");

const Pizza = require("./models/pizzamodels");

// const pizzas = require("./client/src/pizzasdata");

const app = express();
const db = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`server Working on port ${port}`);
});

app.get("/getpizzas", async (req, res) => {
  try {
    const docs = await Pizza.find({});
    res.send(docs);
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while fetching pizzas.");
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port ${port}`);
