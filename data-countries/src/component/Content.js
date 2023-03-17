import Country from "./Country";
const Content = ({ current_list, set_current_list }) => {
  const toggle_show = (event) => {
    const capital = event.target.value;
    let copy = current_list.find((country) =>
      country.capital.includes(capital)
    );
    console.log("before update:", copy.show);
    copy = { ...copy, show: !copy.show };
    console.log("after update:", copy.show);
    set_current_list(
      current_list.map((country) =>
        country.capital.includes(capital) ? copy : country
      )
    );
  };

  if (current_list.length > 10) {
    return <p>Please narrow down your search</p>;
  } else if (current_list.length === 1) {
    return (
      <>
        <Country country={current_list[0]} />
      </>
    );
  }
  return (
    <>
      {current_list.map((country) => {
        if (country.show) {
          console.log(current_list);
          return (
            <>
              <Country country={{ ...country }} />
              <button onClick={toggle_show} value={country.capital}>Show Less</button>
            </>
          );
        }
        return (
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={toggle_show} value={country.capital}>
              Show More
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Content;
