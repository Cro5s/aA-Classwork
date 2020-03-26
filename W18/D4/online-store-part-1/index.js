const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('./models');
const db = require('./config/keys').mongoURI;
const User = mongoose.model("User");

mongoose
  .connect(db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true 
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/hello", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));