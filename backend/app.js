const express = require('express');

const app = express();
// express is a big chain of middleweres
// use is one middleware function.

app.use( (req,res,next) => {
  console.log("First Middlewatre");
  next(); //
});


app.use( (req,res,next) => {
  res.send("Hello from Express");
  //next(); // request will actually continue its joueney
});

module.exports = app;
