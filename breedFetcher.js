const request = require('request');
const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, resp, body) => {
    if (error) {
      callback(`Error: ${error}`, null);
    } else {
      if (body === "INVALID_DATA") {
        callback("INVALID_DATA", null);
      } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        callback("No cats with this breed name");
      } else {
        callback(data[0]["description"]);
      }
    }
    }
  });
};

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});