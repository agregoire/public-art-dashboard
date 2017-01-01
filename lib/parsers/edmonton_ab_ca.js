'use strict';

// Edmonton, Alberta, Canada

exports.getWorks = function(payload) {
  let data = JSON.parse(payload),
      works = [];

  data.forEach((datum) => {
    works.push({
      artist: datum.artist_name,
      medium: datum.medium,
      title: datum.title.trim(),
      latitude: datum.latitude,
      longitude: datum.longitude
    });
  });

  return works;
};