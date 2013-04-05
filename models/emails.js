var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;

var emailSchema = new Schema({
    useremail: String
});

var email = mongoose.model('Email', emailSchema);

//mongoose.connect('mongodb://localhost/scf-email');

//save event into email schema
//em = email
exports.saveEmail = function(em, callback) {
  console.log("SAVING EMAIL...");
 new email({useremail: em}).save(function(err, result) {
     if(err) callback(err);
     else
     {
       console.log("WOOT SAVED this user: " + result);
       callback(null, result);
     }
  });
}
exports.getEmailList = function(callback) {
  email.find({}, function(err, emails) {
    if(err) console.log(err);
    else {
      callback("", emails);
    }
  });
}

