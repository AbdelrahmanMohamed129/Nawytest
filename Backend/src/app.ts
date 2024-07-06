import express from "express";
const mongoose = require("mongoose");
const Apartments = require("./model");
const app = express();
const port = 3001;

var cors = require("cors");

mongoose.connect("mongodb://127.0.0.1:27017/Nawy");
mongoose.connection.on("connected", () => {
  console.log("mongodb connection established successfully");
});
mongoose.connection.on("error", () => {
  console.log("mongodb connection Failed");
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.get("/apartments", async (req, res) => {
  const apartments = await Apartments.find({});
  res.json(apartments);
});
app.get("/apartments/:id", async (req, res) => {
  console.log(req.params.id)
  const apartments = await Apartments.findById(req.params.id);
  res.json(apartments);
});
app.post("/addApartment", async (req, res) => {
  const apartment = await Apartments.create(req.body);
  res.json(apartment);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
