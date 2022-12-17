let req1 = fetch("https://restcountries.com/v3.1/all");
req1
  .then((a) => {
    return a.json();
  })
  .then((b) => {
    document.getElementById(
      "flag1-img"
    ).innerHTML = `<img src="${b[44].flags.png}" id="flag1" class="card-img-top"></img>`;
    document.getElementById("flag1-title").innerHTML = b[44].name.common;
    document.getElementById(
      "flag1-text"
    ).innerHTML = `<li class="list-group-item text-center bg-info fw-semibold">Capital: ${b[44].capital}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Region: ${b[44].region}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Country Code: ${b[44].cioc}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Population: ${b[44].population}</li>`;

    document.getElementById(
      "flag2-img"
    ).innerHTML = `<img src="${b[56].flags.png}" id="flag2" class="card-img-top"></img>`;
    document.getElementById("flag2-title").innerHTML = b[56].name.common;
    document.getElementById(
      "flag2-text"
    ).innerHTML = `<li class="list-group-item text-center bg-info fw-semibold">Capital: ${b[56].capital}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Region: ${b[56].region}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Country Code: ${b[56].cioc}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Population: ${b[56].population}</li>`;

    document.getElementById(
      "flag3-img"
    ).innerHTML = `<img src="${b[123].flags.png}" id="flag3" class="card-img-top"></img>`;
    document.getElementById("flag3-title").innerHTML = b[123].name.common;
    document.getElementById(
      "flag3-text"
    ).innerHTML = `<li class="list-group-item text-center bg-info fw-semibold">Capital: ${b[123].capital}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Region: ${b[123].region}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Country Code: ${b[123].cioc}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Population: ${b[123].population}</li>`;
  });

function func(lat, lng, nam) {
  let name = document.getElementById(`flag${nam}-title`).textContent;
  let req2 = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a25e2b3090d94fba0e3bd0e2d3929498`
  );
  req2
    .then((a) => {
      return a.json();
    })
    .then((b) => {
      

      document.getElementById(
        "weather_info"
      ).innerHTML = `<ul class="list-group">
        <li class="list-group-item bg-dark text-white text-center text-uppercase">weather report of ${name}</li>
        <li class="list-group-item list-group-item-secondary text-center">Temperature: ${b.main.temp}°C</li>
        <li class="list-group-item list-group-item-secondary text-center">Temperature: ${b.wind.speed}m/s</li>
        <li class="list-group-item list-group-item-secondary text-center">Humidity: ${b.main.humidity}%</li>
      </ul>`;
    });
}
