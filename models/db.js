var mongoose = require('mongoose');

var eventsSchema = new mongoose.Schema({
  country: String,
  GroupName: String
});
mongoose.model('Events', eventsSchema);

mongoose.connect('mongodb://localhost/scfEvents');
