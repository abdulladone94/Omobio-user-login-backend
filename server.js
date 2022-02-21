const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
