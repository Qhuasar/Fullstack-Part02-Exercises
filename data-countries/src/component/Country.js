const Country = ({ country }) => {
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
      <img src={country.flags.svg} alt="mySvgImage" />
    </div>
  );
};

export default Country;
