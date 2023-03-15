const List = (props) => (
  <>
    <h2>Numbers</h2>
    {props.displayed_persons.map((person) => (
      <p key={person.id}>
        {person.name} ----- {person.number}
      </p>
    ))}
    ...
  </>
);

export default List;
