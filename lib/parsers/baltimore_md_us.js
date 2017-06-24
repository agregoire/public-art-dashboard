'use strict';

// Baltimore, Maryland, United States

exports.getWorks = (payload) => {
  const works = [];

  JSON.parse(payload).data.forEach((datum) => {
    works.push({
      artist: [datum[9], datum[8]].join(' '),
      medium: datum[13],
      title: datum[11],
      latitude: datum[23][1],
      longitude: datum[23][2],
    });
  });

  return works;
};
