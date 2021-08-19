const express = require("express");
const mongoose = require("mongoose");
const cors = cors();
const { readFileSync, writeFileSync, appendFile } = require("fs");
const app = express();
dotenv.config();
require("dotenv").config();

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, resp) => {
  const count = readFileSync("./count.tx", "utf-8");
  console.log("count", count);

  const newCount = parseInt(count) + 1;
  writeFileSync("./count.tx", `${newCount}`);
  console.log(process.arch);
  console.log(process.env.NODE_ENV);

  resp.send(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Welcome to my website</h1>
            <p>This page has been viewed ${newCount}</p>
            <p></p>
        </body>
    </html>
    `);
});

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} MODE on port: http://localhost:${PORT}`));
