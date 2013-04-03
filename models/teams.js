var mongoose = require('mongoose');
var Team = mongoose.model('Team');
 
exports.teamlist = function teamlist(gname, callback) {
 console.log("enters teamlist");
 Team.find({'GroupName': gname}, function(err, teams) {
  if(err) console.log(err);
  else {
    console.log(teams);
    callback("", teams);
  }
 })
}

exports.saveSomething = function(country, gname) {
 new Team({country: country, GroupName: gname}).save();
 /*team.GroupName = gname;
 team.country = country;
 team.save(function(err, saved) {
   if(err) console.log(err);
   else console.log("works: "+ saved);
 });
 return team;*/
}
