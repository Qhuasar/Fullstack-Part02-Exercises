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
  const [newNotification, setNewNotification] = useState({
    msg: null,
    error: false,
  });
  const change_handler = (setState) => (event) => setState(event.target.value);

  const add_to_persons = (event) => {
    const new_entry = { name: newName, number: newNumber, id: uniquid() };
    event.preventDefault();
    const person_exists = persons.find(
      (person) => new_entry.name.toLowerCase() === person.name.toLowerCase()
    );
    if (person_exists !== undefined) {
      if (
        window.confirm(
          `${person_exists.name} already exists, do you wish to update his number?`
        )
      ) {
        const updated_entry = { ...person_exists, number: new_entry.number };
        phoneServices
          .update_phone_entry(updated_entry)
          .then((data) => {
            setPersons(
              persons.map((person) => (person.id === data.id ? data : person))
            );
            setNewNotification({
              ...newNotification,
              msg: `${person_exists.number} was sucessfuly updated to ${data.number}`,
            });
            setTimeout(() => {
              setNewNotification({ ...newNotification, msg: null });
            }, 5000);
            setNewName("");
            setNewNumber("");
          })
          .catch((err) => {
            setNewNotification({
              msg: `${err} ${person_exists.name} no longer exists`,
              error: true,
            });
            setTimeout(() => {
              setNewNotification({
                msg: null,
                error: false,
              });
            }, 10000);
            setPersons(
              persons.filter((person) => person.id !== person_exists.id)
            );
          });
      }
      return;
    }
    phoneServices.create_phone_entry(new_entry).then((data) => {
      setPersons(persons.concat(data));
      setNewName("");
      setNewNumber("");
      setNewNotification({
        ...newNotification,
        msg: `${new_entry.name} was sucessfuly created!`,
      });
      setTimeout(() => {
        setNewNotification({ ...newNotification, msg: null });
      }, 5000);
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

  const delete_number = (to_be_deleted) => {
    if (
      window.confirm(`Are you sure you want to delete  ${to_be_deleted.name}?`)
    ) {
      phoneServices.delete_number(to_be_deleted.id).then((data) => {
        const updated_persons = persons.filter(
          (person) => to_be_deleted.id !== person.id
        );
        setPersons(updated_persons);
        setNewNotification({
          ...newNotification,
          msg: `${to_be_deleted.name} was  sucessfuly deleted`,
        });
        setTimeout(
          () => setNewNotification({ ...newNotification, msg: null }),
          5000
        );
      });
    }
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
        notification={newNotification}
      />
      <List
        displayed_persons={displayed_persons}
        delete_number={delete_number}
      />
    </div>
  );
};

export default App;
