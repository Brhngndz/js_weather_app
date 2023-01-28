let url = "https://api.openweathermap.org/data/2.5/";
let key = "e38336df8ed6ab9f4ba2f79bd7a0a104";

const setQuery = (e) => {
  if (e.keyCode == "13") getResult(sehir.value);
};

let sehir = document.querySelector("#girdi");
sehir.addEventListener("keypress", setQuery);

const getResult = (sehirIsmi) => {
  let query = `${url}weather?q=${sehirIsmi}&appid=${key}&units=metric&lang=tr`;

  let x = "url('https://source.unsplash.com/1920x1080/?" + sehirIsmi + "')";
  document.body.style.backgroundImage = x;

  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  console.log(result);

  let city = document.querySelector(".sehir");
  city.innerText = `${result.name} , ${result.sys.country}`;

  let deg = document.querySelector(".derece");
  deg.innerText = `${Math.round(result.main.temp)}°c`;

  if (`${Math.round(result.main.temp)}` > 24) {
    document.body.children[0].children[0].children[2].children[1].style.color =
      "#FE7701";
  }
  if (`${Math.round(result.main.temp)}` < 21) {
    document.body.children[0].children[0].children[2].children[1].style.color =
      "#FFD573";
  }
  if (`${Math.round(result.main.temp)}` < 11) {
    document.body.children[0].children[0].children[2].children[1].style.color =
      "#95D9F2";
  }
  if (`${Math.round(result.main.temp)}` < 1) {
    document.body.children[0].children[0].children[2].children[1].style.color =
      "#3BAFE5";
  }

  let durum = document.querySelector(".durum");
  durum.innerText = `${result.weather[0].description} `;

  let wind1 = document.querySelector(".wind1");
  wind1.innerText = `Degree: ${result.wind.deg}° `;

  let wind2 = document.querySelector(".wind2");
  wind2.innerText = `Speed: ${result.wind.speed} Kts`;

  let like = document.querySelector(".like");
  like.innerText = `${result.main.feels_like} °c`;

  let hTemp = document.querySelector(".hTemp");
  hTemp.innerText = `${Math.ceil(result.main.temp_max)} °c`;

  let lTemp = document.querySelector(".lTemp");
  lTemp.innerText = `${Math.floor(result.main.temp_min)} °c`;

  let img = document.querySelector(".img");
  const icon = result.weather[0].icon;
  img.innerHTML = `<img src= http://openweathermap.org/img/w/${icon}.png  />`;

  let objectDate = new Date();
  let day = objectDate.getDate();

  let month = objectDate.getMonth();

  let year = objectDate.getFullYear();

  let zaman = document.querySelector(".time");
  zaman.innerText = `${day}/${month + 1}/${year}`;
};

let sidebar = document.getElementById("sidebar");
document.getElementById("sidebar-btn").onclick = function () {
  sidebar.classList.toggle("fade");
};
