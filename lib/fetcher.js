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

exports.fetch = function fetch(city, callback) {
  const format = city.dataFormat;
  const feedUrl = city.feedUrl;
  const name = city.name;
  const key = city.key;
  const protocol = feedUrl.match(/^https/) ? https : http;
  let errors;

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
      try {
        switch (format) {
          case 'CSV':
            recordCount = countCSV(data.toString(), key);
            break;
          case 'JSON':
            recordCount = countJSON(data.toString(), key);
            break;
          default:
            recordCount = countJSON(data.toString(), key);
            break;
        }
      } catch (error) {
        console.log(`Error for ${city.name}`);

        if (errors === undefined) {
          errors = {};
        }
        errors[city.name] = error;
      }

      return callback(errors, recordCount);
    }));
  });
};
