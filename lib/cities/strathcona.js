var fetcher = require('../fetcher.js');
var feedUrl = "https://data.strathcona.ca/resource/gqaf-3iz6.json";

exports.perform = function(callback) {
  fetcher.fetchJson(feedUrl, "Strathcona County, AB, Canada: ", callback);
}