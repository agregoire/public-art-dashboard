'use strict';

// Tacoma, Washington, United States

exports.getWorks = (payload) => {
  const works = [];

  JSON.parse(payload).data.forEach((datum) => {
    works.push({
      artist: datum[10],
      medium: datum[11],
      title: datum[8],
      latitude: datum[13][1],
      longitude: datum[13][2],
    });
  });

  return works;
};
