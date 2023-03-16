const SearchBox = (props) => {
  return (
    <div>
      <h1>Search for a Country</h1>
      <input
        onChange={(event) =>
          props.change_handler(props.setCountry, event.target.value)
        }
        value={props.country}
      />
    </div>
  );
};

export default SearchBox;
