import axios from "axios";

const get_geo_data = (country) => {
  return axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${country.capital},${country.ccn3}&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((response) => response.data);
};
const get_weather_data = (geo_data) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geo_data.lat}&lon=${geo_data.lon}&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((response) => response.data);
};

export const weatherServices = {
  get_geo_data,
  get_weather_data,
};
