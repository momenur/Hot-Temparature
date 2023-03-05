const apiKey = `2377d2d1875a0d4b3ef38351d7c69a5f`;
const loadTemparature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data))
}
const displayTemparature = data =>{
    console.log(data);
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('weather-condition').innerText = data.weather[0].main;
    console.log(data.main.temp);
}
document.getElementById('btn-search').addEventListener('click', function(){
    const city = document.getElementById('input-filed').value;
    document.getElementById('city-name').innerText = city;
     
    loadTemparature(city);
})
loadTemparature('dhaka');