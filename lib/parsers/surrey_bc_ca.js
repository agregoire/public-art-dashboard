'use strict';

const csv = require('csv-parse');

// Surrey, British Columbia, Canada

exports.getWorks = (payload) => {
  const works = [];

  csv(payload, { columns: true, objname: 'ARTWORK' }, (err, data) => {
    Object.keys(data).forEach((key) => {
      const datum = data[key];

      works.push({
        artist: datum.ARTIST_NAME,
        medium: null,
        title: datum.ARTWORK,
        latitude: datum.LATITUDE,
        longitude: datum.LONGITUDE,
      });
    });

    return works;
  });
};
