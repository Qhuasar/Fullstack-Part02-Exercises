const List = (props) => (
  <>
    <h2>Numbers</h2>
    {props.displayed_persons.map((person) => {
      return (
        <div>
          <p key={person.id}>
            {person.name} ----- {person.number}
          </p>
          <button
            onClick={() => props.delete_number(person)}
          >
            delete
          </button>
        </div>
      );
    })}
    ...
  </>
);

export default List;
