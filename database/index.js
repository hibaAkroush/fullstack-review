var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
	
});

// var userSchema = mongoose.Schema ({ 
//   // username : {type : String , index:{uniqe:true}},
//   // password : {type : String , default : null},
// })

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;

//my token acess key 4dad796f467462a1f0a27b3a853ef9d8069330ea