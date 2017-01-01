'use strict';

// Seattle, Washington, United States

exports.getWorks = function(payload) {
  let works = [];

  JSON.parse(payload).data.forEach((datum) => {
    works.push({
      artist: [datum[10], datum[11]].join(' ').trim(),
      medium: datum[14],
      title: datum[9],
      latitude: datum[20],
      longitude: datum[21]
    });
  });

  return works;
};