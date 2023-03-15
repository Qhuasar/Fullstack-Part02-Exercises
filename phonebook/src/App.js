import { useState } from "react";
import uniquid from "uniquid";
import Form from "./From";
import List from "./List";
import Input from "./Input";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

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

  const displayed_persons = newFilter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    : persons;
  console.log(displayed_persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <Input
        text="filter by name"
        change_handler={change_handler}
        state_var={newFilter}
        set_state={setNewFilter}
      />
      <Form
        add_to_persons={add_to_persons}
        change_handler={change_handler}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        newName={newName}
        setNewName={setNewName}
      />
      <List displayed_persons={displayed_persons} />
    </div>
  );
};

export default App;
