'use strict';

// Strathcona County, Alberta, Canada

exports.getWorks = function(payload) {
  let data = JSON.parse(payload),
      works = [];

  data.forEach((datum) => {
    works.push({
      artist: datum.artist,
      medium: datum.style_type,
      title: datum.title.trim(),
      latitude: datum.geometry.latitude,
      longitude: datum.geometry.longitude
    });
  });

  return works;
};