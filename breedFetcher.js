const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, resp, body) => {
    if (error) {
      callback(`Error: ${error}`, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Breed not found");
    }
  });
};

// fetchBreedDescription(breedName, (error, description) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(description);
//   }
// });

module.exports = { fetchBreedDescription };