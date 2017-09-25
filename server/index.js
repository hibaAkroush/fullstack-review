var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var request = require('request');
// app.use(bodyParser.urlencoded({ extended: true }));
var db = require('../database');

app.use(express.static(__dirname + '/../client/dist'));
//
app.post('/repos/import', function (req, res) {
console.log("hi hanan ")
// var username = req.body.data

console.log(req.body.term)
//octocat
var options = {
  url:"https://api.github.com/users/"+ req.body.term + "/repos",
  headers: {
    'User-Agent': 'request'
  }
};


request(options, function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode);
  var hiba = JSON.parse(body)
  console.log("uername", hiba); 
  for (var i = 0; i < hiba.length; i++) {
  	var hanan = new db({
	username : term,
	repoName : hiba[i].name,
	repoUrl  : "www.github.com"+hiba[i].full_name
	})
	hanan.save(function (err, hanan) {
	if (err) return console.error(err);
	});

  }
});

res.send(JSON.stringify('there are:'+hiba.length))

});


app.get('/repos', function (req, res) {
	hanan.find({},function (err, results) {
  if (err) return console.error(err);
  //console.log(kittens);
  var str = '';
  for (var i = 0; i<results.length;i++) {
  	str= str + results[i].repoName+"<br>"
  }
})
  res.send(JSON.stringify(str))
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

