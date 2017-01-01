'use strict';

// Honolulu, Hawaii, United States

exports.getWorks = function(payload) {
  let works = [];

  JSON.parse(payload).data.forEach((datum) => {
    works.push({
      artist: datum[8],
      medium: datum[15],
      title: datum[16],
      latitude: datum[20][1],
      longitude: datum[20][2]
    });
  });

  return works;
};