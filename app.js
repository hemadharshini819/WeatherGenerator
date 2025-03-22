const button = document.getElementById("button");
const weathercontent = document.getElementById("weathercontent");
const weather=document.getElementById("weather");
let country=0;

button.onclick = () => {
    axios.get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response){
        console.log(response);
        button.textContent = "Next";
        weather.textContent="";
        console.log(response.data[country].city);
        weathercontent.textContent = response.data[country].city;
            weather.textContent = response.data[country].weather_description;
        country++;

    })
    .catch(function(error){
        console.log(error);
    })
};