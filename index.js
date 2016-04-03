const async = require('async');
const fs = require('fs');
const fetcher = require('./lib/fetcher');
const cities = JSON.parse(fs.readFileSync('./cities.json').toString());

async.each(cities, (city, callback) => {
  fetcher.fetch(city.dataFormat, city.feedUrl, city.name, city.key, callback);
});
