const express = require('express');

const app = express();
// express is a big chain of middleweres
// use is one middleware function.

// app.use( (req,res,next) => {
//   console.log("First Middlewatre");
//   next(); //
// });
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,POST, PATCH,DELETE, OPTIONS'
    );
  next();
});


app.use( '/api/posts', (req,res,next) => {
  //res.send("Hello from Express");
  const posts = [
    {
      id: "ff4433445d",
      title: "First server-side post",
      content: "this is coming from server"
    },
    {
      id: "ff4433445d",
      title: "First server-side post",
      content: "this is coming from server!"
    }
  ];
  res.status(200).json({
    message: 'Psts fetched successfully!',
    posts: posts
  });
  //next(); // request will actually continue its joueney
});

module.exports = app;
