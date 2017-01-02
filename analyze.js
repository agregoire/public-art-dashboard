const fs = require('fs'),
      debug = require('debug')('public-art:analyze'),
      data = JSON.parse(fs.readFileSync(__dirname + '/data.json').toString());

console.log([
  'country',
  'state',
  'city',
  'population',
  'artworks',
  'artworksPer1000',
  'area',
  'artworksPerKm'
].join('\t'));

data.forEach((datum) => {
  console.log([
    datum.country,
    datum.state,
    datum.name,
    datum.population.count,
    datum.artworkCount,
    datum.artworkPer1000,
    datum.area.size,
    datum.artworkCount / datum.area.size
  ].join('\t'));
});