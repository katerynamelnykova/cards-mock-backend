"use strict"

const fs = require('fs');
const express = require("express");
const app = express();

// A security risk: Enabling CORS for development. But do NOT enable it for production.
const cors = require('cors');
app.use(cors());

/////////////////////////////////
// Routes
//
app.get("/", welcome);
app.get("/setdescription", getSetDescription);

app.listen(3000)
console.log("Node.js Express server is listening on port 3000...")


/////////////////////////////////
// Implementation of routes
//

function welcome(req, res) {
  res.json({ message: "☃️️ Welcome to Project Cards. Our mock backend is ready for you.️ ☃️" });
}

function getSetDescription(req, res) {
  let filename = "mock_responses/set_description.json";

  let rawData = fs.readFileSync(filename);
  let jsonData = JSON.parse(rawData);
  res.json(jsonData);
}
