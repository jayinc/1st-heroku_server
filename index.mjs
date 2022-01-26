import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, I'm your ExpressJS server!");
});
app.get("/appy", (req, res) => {
  res.send("Here is your appy 🍤🍤");
});
app.get("/salad", (req, res) => {
  res.send("Here is your salad 🥗");
});
app.get("/food", (req, res) => {
  res.send("Here is your main course 🍝");
});
app.get("/drink", (req, res) => {
  res.send("Here is your drink 🧋");
});
app.get("/dessert", (req, res) => {
  res.send("Here is your dessert 🍮");
});

app.listen(port, () => {
  console.log(`Your server app is listening on port http://localhost:${port}/`);
});
