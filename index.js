'use strict';

const async = require('async');
const fs = require('fs');
const fetcher = require('./lib/fetcher');
const cities = JSON.parse(fs.readFileSync('./cities.json').toString());
let results = [];

async.each(cities, (city, callback) => {
  fetcher.fetch(city, (err, count) => {
    if (err) {
      console.log(err);
    }
    console.log(`Got ${count} for city ${city.name}`);
    results.push([city, count]);
    callback(err);
  });
}, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(results);
});
