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
      console.log('response');
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log('data');
      console.log(data);
      //const stolenBike = {};
      //stolenBike['manufacturer_name'] = data.manufacturer_name,
      //stolenBike['color'] = data.frame_colors
    });
};
stolenBikes();