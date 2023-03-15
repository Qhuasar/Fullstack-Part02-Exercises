import { useState } from "react";
import uniquid from "uniquid";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: uniquid() },
  ]);
  const [newName, setNewName] = useState("");

  const change_handler = (event) => {
    setNewName(event.target.value);
  };

  const check_if_exists = () => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        window.alert(`${newName} was already added to the phonebook!`);
        return "exists";
      }
    }
    return "not";
  };
  const add_name = (event) => {
    event.preventDefault();
    if (check_if_exists() === "exists") {
      return;
    }
    setPersons(persons.concat({ name: newName, id: uniquid() }));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={add_name}>
        <div>
          name: <input value={newName} onChange={change_handler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>{person.name}</p>
      ))}
      ...
    </div>
  );
};

export default App;
