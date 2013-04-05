var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var eventsSchema = new Schema({
    title: String,
    date: {type: Date, default: Date.now},
    info: String
});

var Events = mongoose.model('Events', eventsSchema); 

mongoose.connect('mongodb://localhost/scfEvent');

//t =title
//d = date
//i = info
exports.saveEvent = function(t, d, i, callback) {
  console.log("saving");
  new Events({title: t, date: d, info: i}).save( function(err, result){
     if(err) callback(err);
     else 
     { 
       console.log("success " + result);
       callback(null, result);
     }
  });
  console.log("saved: title" + t + " date: " + d + " info: " + i);
  
}

exports.getEventList = function(callback) {
  //console.log("time to get em all with title: " + title2use);
  Events.find({}, function(err, events) {
    if(err) console.log(err);
    else {
      //console.log("printing events: "+events);
      callback("", events);
    }
  });
}

