# Public Art Dashboard

Aggregate data about public art in various cities.

## How does it work ?

The `cities.json` file contains all the informations necessary to load the public art data.

To fetch the data, make sure you have installed the required node modules:

```
npm install
```

Then, run the fetch script:

```
node fetch.js > data.json
```

The `data.json` file will now contain an object with all the cities and all of their public artworks.