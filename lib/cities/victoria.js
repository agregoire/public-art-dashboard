var fetcher = require('../fetcher.js');
var feedUrl = "http://vicmap.victoria.ca/_GISData/PublicArt.csv";

exports.perform = function(callback) {
  fetcher.fetchCsv(feedUrl, "Victoria, BC, Canada: ", callback);
}