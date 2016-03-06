var fetcher = require('../fetcher.js'),
    feedUrl = "https://saskatoonopendataconfig.blob.core.windows.net/converteddata/PublicArtCollection.csv";

exports.perform = function(callback) {
  fetcher.fetchCsv(feedUrl, "Saskatoon, SK, Canada", null, callback);
}