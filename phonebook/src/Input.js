const Input = (props) => (
  <div>
    {props.text}:{" "}
    <input
      value={props.state_var}
      onChange={props.change_handler(props.set_state)}
    />
  </div>
);

export default Input;
