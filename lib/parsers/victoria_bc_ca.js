'use strict';

const csv = require('csv-parse');

// Victoria, British Columbia, Canada

exports.getWorks = function(payload) {
  let works = [];

  csv(payload, { columns: true, objname: 'OBJECTID'}, function(err, data) {
    Object.keys(data).forEach((key) => {
      let datum = data[key];
      console.log(datum);
      works.push({
        artist: datum['Artist'],
        medium: datum.Medium,
        title: datum.Title,
        latitude: datum.Lat,
        longitude: datum.Long
      });
    });

    return works;
  });
};