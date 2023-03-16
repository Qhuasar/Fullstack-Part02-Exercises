const Content = ({ current_list }) => {
  if (current_list.length > 10) {
    return <p>Please narrow down your search</p>;
  } else if (current_list.length === 1) {
    return (
      <>
        {current_list.map((country) => {
          return <p>{country}</p>;
        })}
      </>
    );
  }
  return (
    <>
      {current_list.map((country) => {
        return <p>{country}</p>;
      })}
    </>
  );
};

export default Content;
