'use strict';

const csv = require('csv-parse');

// Cambridge, Massachusets, United States

exports.getWorks = (payload) => {
  const works = [];

  csv(payload, { columns: true, objname: 'OBJECTID' }, (err, data) => {
    Object.keys(data).forEach((key) => {
      const datum = data[key];

      works.push({
        artist: [datum.First_Name, datum.Last_Name].join(' '),
        medium: datum.Category,
        title: datum.Title,
        latitude: datum.Latitude,
        longitude: datum.Longitude,
      });
    });

    return works;
  });
};
