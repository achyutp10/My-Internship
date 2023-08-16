const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://achyutp10:leomessi10@cluster0.o2qmazy.mongodb.net/food";

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB Connection Successfull");
});

db.on("error", () => {
  console.log("Mongo DB Connection failed");
});

module.exports = mongoose;
