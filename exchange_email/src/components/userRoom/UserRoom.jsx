import "./userRoom.css";

function UserRoom(props) {
  return (
    <div className="wrapper__useroom">
      <h1>Your room</h1>
      <ul>
        <li>
          ID: <span>{props.userData[0].id}</span>
        </li>
        <li>
          Email: <span>{props.userData[0].email}</span>
        </li>
        <li>QR</li>
      </ul>
      {console.log(props.userData[0])}
      <button onClick={props.exitRoom}>Exit</button>
    </div>
  );
}

export default UserRoom;
