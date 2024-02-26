import "./userRoom.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clear } from "../../reduxeStore/dataSlice";
import { Navigate } from "react-router-dom";
import QRCode from "react-qr-code";

function UserRoom() {
  const dispatch = useDispatch();
  let usersData = useSelector((state) => state.usersData.value);
  let usersLog = useSelector((state) => state.usersData.login);

  function exitRoom() {
    dispatch(clear(false));
    sessionStorage.clear();
  }

  // if (!usersLog) {
  //   return (
  //     <div>
  //       <h1>Sorry.....you need to log In</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="wrapper__useroom">
      <h1>Your room</h1>
      <ul>
        <li>
          ID:
          <span>{usersData[0].id}</span>
        </li>
        <li>
          Email:
          <span>{usersData[0].email}</span>
        </li>
        <li>QR</li>
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: "70%",
            width: "100%",
          }}>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={usersData[0].email}
            viewBox={`0 0 256 256`}
          />
        </div>
      </ul>
      <button onClick={() => exitRoom()}>Exit</button>
      {!usersLog && <Navigate to="/login" />}
    </div>
  );
}

export default UserRoom;
