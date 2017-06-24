'use strict';

// Strathcona County, Alberta, Canada

exports.getWorks = (payload) => {
  const data = JSON.parse(payload);
  const works = [];

  data.forEach((datum) => {
    works.push({
      artist: datum.artist,
      medium: datum.style_type,
      title: datum.title.trim(),
      latitude: datum.geometry.latitude,
      longitude: datum.geometry.longitude,
    });
  });

  return works;
};
