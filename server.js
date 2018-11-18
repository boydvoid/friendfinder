const express = require('express');
const path = require('path');

// app
const app = express();

// port
const port = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
