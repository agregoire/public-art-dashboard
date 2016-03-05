var fetcher = require('../fetcher.js'),
    feedUrl = "http://data.surrey.ca/dataset/179360d8-db1a-4357-80ba-dfb93b8cc3a6/resource/410fadb9-a4bf-437c-995e-0517f7792638/download/timagesopendataarchivescsvpublicart.csv";

exports.perform = function(callback) {
  fetcher.fetchCsv(feedUrl, "Surrey, BC, Canada", callback);
}