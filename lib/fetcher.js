var https = require('https'),
    http  = require('http'),
    bl    = require('bl');

exports.fetchJson = function(feedUrl, name, callback) {
  fetch(feedUrl, name, countJson, callback);
};

exports.fetchCsv = function(feedUrl, name, callback) {
  fetch(feedUrl, name, countCsv, callback);
}

function countCsv(string) {
  return string.match(/\n/gi).length;
}

function countJson(string) {
  return JSON.parse(string).length;
}

function fetch(feedUrl, name, countFunction, callback) {
  var provider = feedUrl.match(/^https/) ? https : http;
  
  provider.get(feedUrl, function (res) {
    res.pipe(bl(function(err, data) {
      if (err)
        return console.error(err)

      var recordCount = countFunction(data.toString());
      console.log(name + ": " + recordCount + " public works of art");
      callback(null, recordCount);
    }))
  })
};