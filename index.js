var async      = require('async');
    montreal   = require('./lib/cities/montreal.js'),
    surrey     = require('./lib/cities/surrey.js'),
    edmonton   = require('./lib/cities/edmonton.js'),
    victoria   = require('./lib/cities/victoria.js'),
    strathcona = require('./lib/cities/strathcona.js');

var cities = [montreal.perform, surrey.perform, edmonton.perform, victoria.perform, strathcona.perform];

async.parallel(cities, function(err, results) {
  if (err)
    console.log("Error: " + err);
})