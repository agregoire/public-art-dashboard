var https = require('https'),
    http  = require('http'),
    bl    = require('bl');

exports.fetchJson = function(feedUrl, name, key, callback) {
  fetch(feedUrl, name, countJson, key, callback);
};

exports.fetchCsv = function(feedUrl, name, key, callback) {
  fetch(feedUrl, name, countCsv, key, callback);
}

function countCsv(string, key) {
  return string.match(/\n/gi).length;
}

function countJson(string, key) {
  var original = JSON.parse(string);
  var data = key ? original[key] : original
  return data.length;
}

function fetch(feedUrl, name, countFunction, key, callback) {
  var protocol = feedUrl.match(/^https/) ? https : http;
  
  protocol.get(feedUrl, function (res) {
    res.pipe(bl(function(err, data) {
      if (err)
        return console.error(err)

      var recordCount = countFunction(data.toString(), key);
      console.log(name + ": " + recordCount + " public works of art");
      callback(null, recordCount);
    }))
  })
};