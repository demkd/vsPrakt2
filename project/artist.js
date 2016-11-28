var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Artist = new mongoose.Schema({
name: String
, location: String
, bdate: String
, favorit: Boolean
, uid: Number
});

module.exports = mongoose.model('Artist', ArtistSchema);