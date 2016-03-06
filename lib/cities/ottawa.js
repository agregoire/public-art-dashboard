var fetcher = require('../fetcher.js'),
    feedUrl = "http://data.ottawa.ca/dataset/eb00fb25-93bf-4565-82c7-e63454bc7d1d/resource/ece8cb83-d78e-4db1-a917-2eb375518652/download/publicart160118.csv";

exports.perform = function(callback) {
  fetcher.fetchCsv(feedUrl, "Ottawa, ON, Canada", null, callback);
}