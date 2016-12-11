'use strict';

const request = require('request');

function countCSV(string) {
  return string.match(/\n/gi).length;
}

function countJSON(string, key) {
  const original = JSON.parse(string),
        data = key ? original[key] : original;
  
  return data.length;
}

function getWorks(payload, dataKey, cityId) {
  let works = [];

  try {
    let parser = require(`${__dirname}/parsers/${cityId}`);
    works = parser.getWorks(payload, dataKey);
  } catch(e) {
    console.log(e);
  }

  return works;
}

exports.fetch = function fetch(city, callback) {
  const format = city.dataFormat,
        feedUrl = city.feedUrl,
        name = city.name,
        key = city.key;
  
  let errors,
      works = [];

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
      works = getWorks(body, key, city.id);
    }

    return callback(errors, recordCount, works);
  });
};
