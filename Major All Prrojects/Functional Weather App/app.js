

const PakistanCities = [
  { name: "Karachi", lat: 24.8607, lon: 67.0011 },
  { name: "Lahore", lat: 31.5204, lon: 74.3587 },
  { name: "Islamabad", lat: 33.6844, lon: 73.0479 },
  { name: "Rawalpindi", lat: 33.6007, lon: 73.0679 },
  { name: "Peshawar", lat: 34.0151, lon: 71.5249 },
  { name: "Quetta", lat: 30.1798, lon: 66.9750 },
  { name: "Faisalabad", lat: 31.418, lon: 73.079 },
  { name: "Multan", lat: 30.1575, lon: 71.5249 },
  { name: "Sialkot", lat: 32.4945, lon: 74.5229 },
  { name: "Gujranwala", lat: 32.1877, lon: 74.1945 },
  { name: "Hyderabad", lat: 25.396, lon: 68.3578 },
  { name: "Sukkur", lat: 27.7052, lon: 68.8574 },
  { name: "Sargodha", lat: 32.0836, lon: 72.6711 },
  { name: "Swabi", lat: 34.1199, lon: 72.4691 },
  { name: "Chaman", lat: 30.9177, lon: 66.4520 },
  { name: "Loralai", lat: 30.3707, lon: 68.5970 },
  { name: "Sibi", lat: 29.543, lon: 67.8773 },
  { name: "Gwadar", lat: 25.1264, lon: 62.3225 },
  { name: "Khuzdar", lat: 27.811, lon: 66.61 },
  { name: "Turbat", lat: 26.0031, lon: 63.0344 },
  { name: "Bahawalpur", lat: 29.3956, lon: 71.6836 },
  { name: "Okara", lat: 30.8106, lon: 73.459 },
  { name: "Haripur", lat: 33.9991, lon: 72.9343 },
  { name: "Kohat", lat: 33.5869, lon: 71.4414 },
  { name: "karak", lat: 36.3167, lon: 74.65 },
  { name: "Skardu", lat: 35.2976, lon: 75.6334 },
  {name: "Mardan",  late: 34.0954,lon: 667654 },
  {name: "kohat",late: 36.8765, lon: 665543},
];

async function searchCity() {
  const inputBox = document.getElementById("cityInput");
  const city = inputBox.value.trim().toLowerCase();

  const found = PakistanCities.find(c => c.name.toLowerCase() === city);

  if (!found) {
    alert("City not found in Pakistan list.");
    return;
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${found.lat}&longitude=${found.lon}&current_weather=true`;

  const response = await fetch(url);
  const data = await response.json();

  const w = data.current_weather;

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("cityName").textContent = found.name;
  document.getElementById("temp").textContent = `🌡 Temperature: ${w.temperature}°C`;
  document.getElementById("wind").textContent = `💨 Wind Speed: ${w.windspeed} km/h`;
  document.getElementById("latlon").textContent = `📍 Lat: ${found.lat}, Lon: ${found.lon}`;

  inputBox.value = "";
}