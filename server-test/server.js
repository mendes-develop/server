require("dotenv").config();
const { readFileSync, writeFileSync, appendFile } = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDB = require("./database/db");
connectToDB();

const UserModel = require("./database/models/user");
const ItemModel = require("./database/models/item")

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

console.log(process.env.DB_USER);

const PORT = process.env.PORT || 5000;
console.log(process.arch);
console.log(process.env.NODE_ENV);

app.get("/", (req, resp) => {
  const count = readFileSync("./count.tx", "utf-8");
  console.log("count", count);

  const newCount = parseInt(count) + 1;
  writeFileSync("./count.tx", `${newCount}`);
  resp.send(`<p>This page has been viewed ${newCount}</p>`);
});

app.post("/users", async (req, resp) => {
  console.log(req.body);
  console.log(UserModel);

  try {
    const newUser = new UserModel(req.body);
    const savedUser = await newUser.save();
    resp.json(savedUser);
  } catch (error) {
    resp.json(error);
  }
});

app.get("/users", async (req, res) => {
  const users = await UserModel.find({});
  res.json(users);
});

app.post("/items", async (req, resp) => {
  console.log(req.body);

  const newItem = new ItemModel(req.body);
  const savedItem = await newItem.save();
  resp.json(savedItem);
});

app.get("/items", async (req, res) => {
  const items = await ItemModel.find({});
  res.json(items);
});

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} MODE on port: http://localhost:${PORT}`
  )
);
