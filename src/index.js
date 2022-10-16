//Business Logic

/*function getStolenBikes() {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://bikeindex.org:443/api/v3/search?location=IP&distance=10&stolenness=stolen`;
    request.addEventListener("loadend", function() {
      const response = response.json();
      if (this.status === 200) {
        resolve(response);
      } else {
        reject(response);
      }
    });
    request.open("GET", url, true);
    request.send();
  });
  
  promise.then(function(response) {
    printElements(response);
  }, function(errorMessage) {
    printError(errorMessage);
  });
}*/

// UI stuffs
// function printElements(responseMessage) {
//   document.getElementById("divOutput").innerHTML = responseMessage;
// }

// function printError(errorMessage) {
//   document.getElementById("divOutput").innerHTML = errorMessage;
// }

//getStolenBikes();


//

const stolenBikes = () => {
  const url = `https://bikeindex.org:443/api/v3/search?location=IP&distance=10&stolenness=stolen`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('data');
      console.log(data);
      const stolenBikes = [];
      for (let i = 0; i < data.bikes.length; i++) {
        const stolenBike = {
          bike: data.bikes[i].manufacturer_name,
          colors: data.bikes[i]['frame_colors'].map((colors) => colors).join(', '),
          status: data.bikes[i].status,
          location: data.bikes[i].stolen_location
        };
        stolenBikes.push(stolenBike);
      }
      console.log('stolenBikes');
      console.log(stolenBikes);
      displayStolenBike(stolenBikes);
    });
};

const displayStolenBike = (stolenBikes) => {
  const outputDiv = document.getElementById('divOutput');
  const bikesHTMLString = stolenBikes.map ( stolenBike => `
  <p>Bike Manufacturer: ${stolenBike.bike}.</p> <p>Colors: ${stolenBike.colors}.</p> <p>Status: ${stolenBike.status} in ${stolenBike.location}!</p><br>
  `).join('');
  outputDiv.innerHTML = bikesHTMLString;
};

stolenBikes();