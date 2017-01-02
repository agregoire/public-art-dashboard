'use strict';

const request = require('request'),
      debug = require('debug')('public-art:fetcher');

function countCSV(string) {
  return string.match(/\n/gi).length;
}

function countJSON(string, key) {
  try {
    const original = JSON.parse(string),
          data = key ? original[key] : original;

    return data.length;
  } catch(e) {
    debug('Error');
    debug(string);
    debug(key);
    debug(e);

    return 0;
  }
}

function getWorks(payload, dataKey, cityId, callback) {
  let works = [];

  try {
    let parser = require(`${__dirname}/parsers/${cityId}`);
    works = parser.getWorks(payload, dataKey);

    callback(null, works);
  } catch(e) {
    debug(e);

    callback(e, works);
  }
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

      return callback(errors, recordCount, works);
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

      getWorks(body, key, city.id, function(error, works) {
        if (err) {
          errors[city.name] = error;
        }
        return callback(errors, recordCount, works);
      });
    }
  });
};
