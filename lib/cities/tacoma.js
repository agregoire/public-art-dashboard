var fetcher = require('../fetcher.js');
var feedUrl = "https://data.cityoftacoma.org/api/views/49qs-n9hw/rows.json?accessType=DOWNLOAD";

exports.perform = function(callback) {
  fetcher.fetchJson(feedUrl, "Tacoma, WA, USA: ", 'data', callback);
}