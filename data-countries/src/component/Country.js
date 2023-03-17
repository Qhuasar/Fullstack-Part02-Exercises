import { useEffect, useState } from "react";
import { weatherServices } from "../services/weather";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [newWeather, setNewWeather] = useState(null);
  useEffect(() => {
    weatherServices
      .get_geo_data({ ...country })
      .then((geo_data) => {
        console.log(geo_data);
        return weatherServices.get_weather_data({ ...geo_data[0] });
      })
      .then((weather_data) => {
        setNewWeather(weather_data);
        console.log(weather_data);
      });
  }, [country]);
  return (
    <div>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <ul>
        <h1>Languages</h1>
        {Object.keys(country.languages).map((lang) => (
          <li>{country.languages[lang]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="Flag" />
      <Weather weather_data={newWeather} city={country.capital} />
    </div>
  );
};

export default Country;
