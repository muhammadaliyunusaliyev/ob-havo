


const searchBox = document.querySelector('.search__box');

searchBox.addEventListener('keypress',setQuery)

function setQuery(e) {
     // if (e.keyCode == 13){
     //      console.log(searchBox.value);
     // }
     console.log(e);
}
setQuery()

function getResult(query) {
     // fetch(`${api.baseurl}weather?q=${query & units = metric & APPID = $ {'api.key'}}`)
     then(
          (weather) => {
               return weather.json()
          }
     )
     .then(displayResult);
     
}

function displayResult(weather) {
    console.log(weather);//     let city = documant.quarySelector(".location .city");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    let date = documant.querySelector('.location .date');
    date.innerHTML = dateBuilder(now);

    let temp = documant.querySelector('.temp')
//     temp.innerHTML = ${Math.round(weather.main.temp)}

    let weatherEl = documant.quarySelector(".weather");
    weatherEl.innerHTML = weather.weather[0].main;

    let hilow = documant.querySelector(".hi__low");
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

};


function dateBuilder(s) {
     let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
     let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     let day = days[s.getDay()];
     let date = s.getDay()
     let month = s.months[s.getMonth()];
     let year = s.getFullYear();

}