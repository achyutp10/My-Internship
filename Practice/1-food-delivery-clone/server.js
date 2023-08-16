const express = require("express");

const Pizza = require("./models/pizzamodels");

const app = express();
const db = require("./db.js");

app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use("/api/pizzas/", pizzasRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders', ordersRoute);

app.get("/", (req, res) => {
  res.send(`server Working on port ${port}`);
});

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port ${port}`);
