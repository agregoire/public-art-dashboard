'use strict';

// Montréal, Québec, Canada

exports.getWorks = (payload) => {
  const data = JSON.parse(payload);
  const works = [];

  data.forEach((datum) => {
    let artist;
    if (datum.Artistes) {
      artist = datum.Artistes.map(a => [a.Prenom, a.Nom, a.NomCollectif].join(' ')).join(', ');
      if (artist) { artist = artist.trim(); }
    }
    works.push({
      artist,
      medium: datum.Technique,
      title: datum.Titre.trim(),
      latitude: datum.CoordonneeLatitude,
      longitude: datum.CoordonneeLongitude,
    });
  });

  return works;
};
