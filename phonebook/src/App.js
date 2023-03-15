import { useEffect, useState } from "react";
import uniquid from "uniquid";
import Form from "./From";
import List from "./List";
import Input from "./Input";
import { phoneServices } from "./services/phone";
const App = () => {
  const [persons, setPersons] = useState([]);
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
    const new_entry = { name: newName, number: newNumber, id: uniquid() };
    event.preventDefault();
    if (check_if_exists() === "exists") {
      return;
    }
    phoneServices.create_phone_entry(new_entry).then((data) => {
      setPersons(persons.concat(data));
      setNewName("");
      setNewNumber("");
    });
  };

  const displayed_persons = newFilter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    : persons;

  useEffect(() => {
    phoneServices.get_all().then((contacts) => setPersons(contacts));
  }, []);

  const delete_number = (id) => {
    phoneServices.delete_number(id).then((data) => {
      const pdated_persons = persons.filter(person => id !== person.id)
      setPersons(pdated_persons);
    });
  };

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
      <List
        displayed_persons={displayed_persons}
        delete_number={delete_number}
      />
    </div>
  );
};

export default App;
