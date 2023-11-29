

function showtime() {
  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>
const location = document.getElementById('locationInput').value;
if (location == "") {
 alert("please enter location");
}


else{
const loc = `https://geocode.maps.co/search?q=${location}`
document.getElementById('enteredPlace').textContent = "location you searched for -->   "+location;

fetch(loc)
  .then(response => response.json())
  .then(data => { 
    latitude = data[0].lat
    longitude  = data[0].lon
    place = data[0].display_name
  })
  .catch(error => alert("Their is no place like --> "+location))
// >>>>>>>>>>>>>>>>>>>>>>>>>>>
document.getElementById('actplace').textContent = "Most close location of your search -->"+ place;



const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`
fetch(url)
  .then(response => response.json())
  .then(data => {
    document.querySelector('#sunrise').innerHTML = data.results.sunrise
    document.querySelector('#sunset').innerHTML = data.results.sunset
    document.querySelector('#dawn').innerHTML = data.results.dawn
    document.querySelector('#dusk').innerHTML = data.results.dusk
    document.querySelector('#day_length').innerHTML = data.results.day_length
    document.querySelector('#solar_noon').innerHTML = data.results.solar_noon
    document.querySelector('#timezone').innerHTML = data.results.timezone

  document.querySelector('#raw-output').innerHTML = JSON.stringify(data)
  })
  .catch(error => console.error('Error:', error))
// >>>>>>>>>>>>>>>>>>>>>>>>>>>





 const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowUrl = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=${tomorrow.toISOString().split('T')[0]}`;
  fetch(tomorrowUrl)
  .then(response => response.json())
  .then(data => {
    document.querySelector('#sunrise1').innerHTML = data.results.sunrise
    document.querySelector('#sunset1').innerHTML = data.results.sunset
    document.querySelector('#dawn1').innerHTML = data.results.dawn
    document.querySelector('#dusk1').innerHTML = data.results.dusk
    document.querySelector('#day_length1').innerHTML = data.results.day_length
    document.querySelector('#solar_noon1').innerHTML = data.results.solar_noon
    document.querySelector('#timezone1').innerHTML = data.results.timezone

  document.querySelector('#raw-output1').innerHTML = JSON.stringify(data)
  })
  .catch(error => console.error('Error:', error))
// >>>>>>>>>>>>>>>>>>>>>>>>>>>
}}