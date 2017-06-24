'use strict';

const request = require('request');
const debug = require('debug')('public-art:fetcher');

function countCSV(string) {
  return string.match(/\n/gi).length;
}

function countJSON(string, key) {
  try {
    const original = JSON.parse(string);
    const data = key ? original[key] : original;

    return data.length;
  } catch (e) {
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
    const parser = require(`./parsers/${cityId}`); // eslint-disable-line import/no-dynamic-require
    works = parser.getWorks(payload, dataKey);

    callback(null, works);
  } catch (e) {
    debug(e);

    callback(e, works);
  }
}

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
      errors[name] = err;

      callback(errors, recordCount, []);
      return;
    }

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

    getWorks(body, key, city.id, (error, works) => {
      if (err) {
        errors[city.name] = error;
      }
      return callback(errors, recordCount, works);
    });
  });
};
