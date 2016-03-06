var async   = require('async'),
    fs      = require('fs'),
    fetcher = require('./lib/fetcher');

var cities = JSON.parse(fs.readFileSync("./cities.json").toString());

async.each(cities, function(city, callback) {
  fetcher.fetch(city.dataFormat, city.feedUrl, city.name, city.key, callback);
});