'use strict';

const https = require('https');
const http = require('http');
const bl = require('bl');

const countCSV = function countCSV(string) {
  return string.match(/\n/gi).length;
};

const countJSON = function countJSON(string, key) {
  const original = JSON.parse(string);
  const data = key ? original[key] : original;
  return data.length;
};

exports.fetch = function fetch(format, feedUrl, name, key, callback) {
  const protocol = feedUrl.match(/^https/) ? https : http;
  protocol.get(feedUrl, (res) => {
    res.pipe(bl((err, data) => {
      if (err) {
        return console.error(err);
      }

      if (data.toString() === null) {
        console.log(`Error for: ${name}`);
        return callback(null, null);
      }

      let recordCount;
      switch (format) {
        case 'CSV':
          recordCount = countCSV(data.toString(), key);
          break;
        case 'JSON':
          recordCount = countJSON(data.toString(), key);
          break;
        default:
          recordCount = countJSON(data.toString(), key);
      }

      console.log(`${name}: ${recordCount} public works of art`);
      return callback(null, recordCount);
    }));
  });
};
