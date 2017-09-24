var express = require('express');

var app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // TODO
  console.log("hi hanan ")
  console.log(bodyParser.json(req.body.d))
});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

