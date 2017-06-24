'use strict';

// San Francisco, California, United States

exports.getWorks = (payload) => {
  const works = [];

  JSON.parse(payload).data.forEach((datum) => {
    works.push({
      artist: datum[11],
      medium: datum[17],
      title: datum[19],
      latitude: datum[20][1],
      longitude: datum[20][2],
    });
  });

  return works;
};
