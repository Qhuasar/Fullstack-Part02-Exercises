import { useEffect, useState } from "react";

const Weather = ({ weather_data, city }) => {
  const [newIcon, setNewIcon] = useState(null);
  const convert_to_celsius = (kelvin) => Math.trunc(kelvin - 272.15);
  useEffect(() => {
    if (weather_data) {
      setNewIcon(
        ` https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`
      );
    }
  }, [weather_data]);

  if (weather_data) {
    return (
      <div>
        <h1>Weather in {city}</h1>
        <p>temperature {convert_to_celsius(weather_data.main.temp)} Cº</p>
        <p>wind: {weather_data.wind.speed} m/s</p>
        <img src={newIcon} alt="weather-icon" />
      </div>
    );
  } else {
    return <p>No weather data aviable</p>;
  }
};

export default Weather;
