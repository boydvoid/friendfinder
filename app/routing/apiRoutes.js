const data = require('../data/friends');

module.exports = function (app) {
  // get route
  app.get('/api/friends', (req, res) => {
    res.json(data);
  });

  // post route
  app.post('/api/friends', (req, res) => {
    data.push(req.body)
  });
};
