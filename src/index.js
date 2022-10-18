//Business Logic

// Bike API: https://api.99spokes.com/docs
//

import './css/styles.css'
import getBounty from './utility/Bounty';

const stolenBikes = () => {
  const url = `https://bikeindex.org:443/api/v3/search?location=IP&distance=10&stolenness=stolen`;
  fetch(url)
    .then((response) => {
      console.log(response);
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
          serial: data.bikes[i].serial,
          location: data.bikes[i].stolen_location,
          image: data.bikes[i].large_img,
          bounty: getBounty(data.bikes[i].manufacturer_name)
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
  <img src="${stolenBike.image}"/>
  <p><strong>Bike Manufacturer:</strong> ${stolenBike.bike}.
  <br>
  <strong>Serial Number:</strong> ${stolenBike.serial}</p>
  <p><strong>Color(s):</strong> ${stolenBike.colors}.</p>
  <p><strong>Status:</strong> ${stolenBike.status} in ${stolenBike.location}!</p> <hr>
  `).join('<br>');
  outputDiv.innerHTML = bikesHTMLString;
};

//function displayError {for bad API request}

stolenBikes();