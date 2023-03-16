const NotificationStyles = {
  color: "green",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};
const NotificationStylesError = {
  color: "red",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const Notification = ({ message: { msg, error } }) => {
  if (!msg) {
    return;
  }
  if(error){
    return <div style={NotificationStylesError}>{msg}</div>;
  }
  return <div style={NotificationStyles}>{msg}</div>;
};

export default Notification;
