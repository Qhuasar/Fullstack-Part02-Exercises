import Input from "./Input";
import Notification from "./components/Notification";

const Form = (props) => {
  return (
    <form onSubmit={props.add_to_persons}>
      <h2>add a new</h2>
      <Input
        text="name"
        change_handler={props.change_handler}
        state_var={props.newName}
        set_state={props.setNewName}
      />
      <Input
        text="number"
        change_handler={props.change_handler}
        state_var={props.newNumber}
        set_state={props.setNewNumber}
      />
      <button type="submit">add</button>
      <Notification message={props.notification} />
    </form>
  );
};

export default Form;
