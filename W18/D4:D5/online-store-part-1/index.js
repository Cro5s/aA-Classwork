const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('./models');
const db = require('./config/keys').mongoURI;
const User = mongoose.model("User");
const graphqlHTTP = require('express-graphql');
const expressPlayground = require(
  'graphql-playground-middleware-express'
).default;
const { schema, resolvers } = require('./schema/index');

mongoose.connect(db, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true 
})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const passport = require('passport');
require('./config/passport')(passport);
app.use(passport.initialize());
const { passportAuthenticate } = require('./middlewares');

app.use(
  "/graphql",
  passportAuthenticate(passport),
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers
  })
);

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.get("/hello", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));