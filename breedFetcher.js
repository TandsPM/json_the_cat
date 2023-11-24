const request = require('request');
const breedName = process.argv[2];

const breedFetcher = function (breed) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, resp, body) => {

    if (error) {
      return console.log(`Error: ${error}`);
    } else {

      if (body === "INVALID_DATA") {
        console.log("INVALID_DATA");
      } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        console.log("No cats with this breed name");
      } else {
        console.log(data[0]["description"]);
      }
    }
    }
  })
};

breedFetcher(breedName);