const input = document.querySelector(`#search`);
const btn = document.querySelector(`.btn-search`);

const tempe = document.querySelector(`.temp`);
const hum = document.querySelector(`.hum`);
const ciudad = document.querySelector(`.ciudad`);

const hora = document.querySelector(`.hora`);
const fecha = document.querySelector(`.fecha`)
const dmy = document.querySelector(`.dmy`)
const img1 = document.querySelector(`.img1`);

const estado = document.querySelector(`.estado`);
const velocidad = document.querySelector(`.velocidad`);

window.addEventListener(`load`, function () {
  input.value = ``;
});

btn.addEventListener(`click`, () => {
  fetch( "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=8d65446c85d6112b04a3a647c47ae781&lang=es")
    .then((response) => response.json())
    .then((data) => {
      let descWeather = data[`weather`][0][`description`];
      let humidity = data[`main`][`humidity`];
      let country = data[`sys`][`country`];
      let temp = Math.ceil(data[`main`][`temp`] - 273.15);
      let windSpeed = data[`wind`][`speed`];
      let iconWeather = data[`weather`][0][`icon`];
      let iconUrl = "http://openweathermap.org/img/w/" + iconWeather + ".png";
  

      tempe.innerHTML = temp + "°C";
      hum.innerHTML = humidity + "%";
      ciudad.innerHTML = country;
      img1.src = iconUrl;
      estado.innerHTML = descWeather;
      velocidad.innerHTML = windSpeed + ` K/h`;

      //////////////////////////////

      

   
    });

    
});

function reloj() {
  const now = new Date();
  let hr = now.getHours();
  let ms = now.getMinutes();
  let sg = now.getSeconds();

  let medio = `am`;
  if (hr > 12) {
    hr = hr - 12;
    medio = `pm`;
  }

  if (hr < 10) {
    hr = `0` + hr;
  }
  if (ms < 10) {
    ms = `0` + ms;
  }
  if (sg < 10) {
    sg = `0` + sg;

    const full = `${hr}:${ms}:${sg} ${medio} `;
    hora.innerHTML = full;
  }
}
window.onload = function () {
  setInterval(reloj, 500);
};


const urlBanderas = `https://flagcdn.com/es/codes.json`;

fetch(urlBanderas)
.then((res) => res.json())
.then((data) => {

if(data.ciudad){
    console.log(ciudad)
}

});

let diasSemana = [`domingo`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`]

const now = new Date()

let d = now.getDay()
let sem = now.getDate()
let m = now.getMonth()
let y = now.getFullYear()
let diaSemana = diasSemana[d]

const ddmmyyyy = `${sem}/${m + 1}/${y}`

dmy.innerHTML = ddmmyyyy
fecha.innerHTML = diaSemana