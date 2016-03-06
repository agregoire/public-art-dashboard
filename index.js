var async  = require('async');
var cities = [
  require('./lib/cities/montreal.js'),
  require('./lib/cities/surrey.js'),
  require('./lib/cities/edmonton.js'),
  require('./lib/cities/victoria.js'),
  require('./lib/cities/strathcona.js'),
  require('./lib/cities/saskatoon.js'),
  require('./lib/cities/ottawa.js'),
  require('./lib/cities/tacoma.js'),
];

async.parallel(cities.map(c => c.perform), function(err, results) {
  if (err)
    console.log("Error: " + err);
})