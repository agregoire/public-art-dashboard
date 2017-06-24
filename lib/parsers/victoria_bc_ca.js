'use strict';

const csv = require('csv-parse');

// Victoria, British Columbia, Canada

exports.getWorks = (payload) => {
  const works = [];

  csv(payload, { columns: true, objname: 'OBJECTID' }, (err, data) => {
    Object.keys(data).forEach((key) => {
      const datum = data[key];

      works.push({
        artist: datum.Artist,
        medium: datum.Medium,
        title: datum.Title,
        latitude: datum.Lat,
        longitude: datum.Long,
      });
    });

    return works;
  });
};
