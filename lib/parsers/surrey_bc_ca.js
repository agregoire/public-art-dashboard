'use strict';

const csv = require('csv-parse');

// Surrey, British Columbia, Canada

exports.getWorks = function(payload) {
  let works = [];

  csv(payload, { columns: true, objname: 'ARTWORK'}, function(err, data) {

    Object.keys(data).forEach((key) => {
      let datum = data[key];

      works.push({
        artist: datum.ARTIST_NAME,
        medium: null,
        title: datum.ARTWORK,
        latitude: datum.LATITUDE,
        longitude: datum.LONGITUDE
      });
    });

    return works;
  });
};