'use strict';

const async = require('async');
const fs = require('fs');
const fetcher = require(__dirname + '/lib/fetcher');
const cities = JSON.parse(fs.readFileSync(__dirname + '/cities.json').toString());

async.each(cities, (city, callback) => {
  fetcher.fetch(city, (err, count, works) => {
    if (err) {
      console.log(err);
    }
    city.artworkCount = count;
    city.artworkPer1000 = (count / city.population.count) * 10000;
    city.works = works;
    callback(err);
  });
}, (err) => {
  if (err)  console.log(err);
  console.log(JSON.stringify(cities, null , 2));
});
