const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abdulla43005",
  database: "omobio_login",
});

app.post("/signup", (req, res) => {
  const name = req.body.name;
  const username = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "INSERT INTO login (name, useName, email, password) VALUES (?,?,?,?)",
    [name, username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        alert("User added successfully");
      }
      console.log(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
