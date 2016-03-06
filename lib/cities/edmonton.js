var fetcher = require('../fetcher.js'),
    feedUrl = "https://data.edmonton.ca/resource/m6c2-uhxn.json";

exports.perform = function(callback) {
  fetcher.fetchJson(feedUrl, "Edmonton, AB, Canada: ", null, callback);
}