'use strict';

const request = require('request');

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
  let errors;

  request(feedUrl, (err, res, body) => {
    let recordCount;

    if (err) {
      if (errors === undefined) {
        errors = {};
      }
      errors[city.name] = err;
    } else {
      switch (format) {
        case 'CSV':
          recordCount = countCSV(body, key);
          break;
        case 'JSON':
          recordCount = countJSON(body, key);
          break;
        default:
          recordCount = countJSON(body, key);
          break;
      }
    }

    return callback(errors, recordCount);
  });
};
