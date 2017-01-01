'use strict';

const async = require('async'),
      fs = require('fs'),
      debug = require('debug')('public-art:fetch'),
      fetcher = require(__dirname + '/lib/fetcher'),
      cities = JSON.parse(fs.readFileSync(__dirname + '/cities.json').toString());

async.each(cities, (city, callback) => {
  fetcher.fetch(city, (err, count, works) => {
    if (err) debug(err);
    city.artworkCount = count;
    city.artworkPer1000 = (count / city.population.count) * 10000;
    city.works = works;
    callback(err);
  });
}, (err) => {
  if (err) debug(err);
  console.log(JSON.stringify(cities, null, 2));
});
