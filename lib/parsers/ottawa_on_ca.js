'use strict';

const csv = require('csv-parse');

// Ottawa, Ontario, Canada

exports.getWorks = function(payload) {
  let works = [];

  csv(payload, { columns: true, objname: 'ACCESSION'}, function(err, data) {

    Object.keys(data).forEach((key) => {
      let datum = data[key];

      works.push({
        artist: datum['ARTIST(S)'],
        medium: datum.MATERIAL,
        title: datum.ARTWORK,
        latitude: datum.LAT,
        longitude: datum.LONG
      });
    });

    return works;
  });
};