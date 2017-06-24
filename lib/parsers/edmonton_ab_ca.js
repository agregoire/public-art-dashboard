'use strict';

// Edmonton, Alberta, Canada

exports.getWorks = (payload) => {
  const data = JSON.parse(payload);
  const works = [];

  data.forEach((datum) => {
    works.push({
      artist: datum.artist_name,
      medium: datum.medium,
      title: datum.title.trim(),
      latitude: datum.latitude,
      longitude: datum.longitude,
    });
  });

  return works;
};
