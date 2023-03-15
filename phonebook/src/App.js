import { useState } from "react";
import uniquid from "uniquid";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 98734521, id: uniquid() },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const change_handler = (setState) => (event) => setState(event.target.value);

  const check_if_exists = () => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        window.alert(`${newName} was already added to the phonebook!`);
        return "exists";
      }
    }
    return "not";
  };

  const add_to_persons = (event) => {
    event.preventDefault();
    if (check_if_exists() === "exists") {
      return;
    }
    setPersons(
      persons.concat({ name: newName, number: newNumber, id: uniquid() })
    );
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={add_to_persons}>
        <div>
          name: <input value={newName} onChange={change_handler(setNewName)} />
        </div>
        <div>
          number:{" "}
          <input value={newNumber} onChange={change_handler(setNewNumber)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} ----- {person.number}
        </p>
      ))}
      ...
    </div>
  );
};

export default App;
