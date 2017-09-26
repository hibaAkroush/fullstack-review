var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var github =  mongoose.connection;
//use DATABASE_NAME
// use githup

githup.on('error', console.error.bind(console, 'connection error:'));
githup.once('open', function () {
  console.log('Mongodb connection open');
});

var repoSchema = mongoose.Schema({
	// id : {type : Number },
	username : {type : String , index:{uniqe:true}},
	repoName : {type : String  },
	repoUrl  : {type : String  }


});

// var userSchema = mongoose.Schema ({ 
//   // username : {type : String , index:{uniqe:true}},
//   // password : {type : String , default : null},
// })

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;

//my token acess key 4dad796f467462a1f0a27b3a853ef9d8069330ea


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});