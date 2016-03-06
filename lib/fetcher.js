var https = require('https'),
    http  = require('http'),
    bl    = require('bl');


exports.fetch = function(format, feedUrl, name, key, callback) {
  var protocol = feedUrl.match(/^https/) ? https : http,
      recordCount;
  
  protocol.get(feedUrl, function (res) {
    res.pipe(bl(function(err, data) {
      if (err)
        return console.error(err)

      switch(format) {
        case "CSV":
          recordCount = countCSV(data.toString(), key);
          break;
        case "JSON":
          recordCount = countJSON(data.toString(), key);
      };

      console.log(name + ": " + recordCount + " public works of art");
      callback(null, recordCount);
    }))
  })
};

var countCSV = function(string, key) {
  return string.match(/\n/gi).length;
}

var countJSON = function(string, key) {
  var original = JSON.parse(string);
  var data = key ? original[key] : original
  return data.length;
}