import "./userRoom.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clear } from "../../reduxeStore/dataSlice";
import { Navigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

function UserRoom() {
  const dispatch = useDispatch();
  let usersData = useSelector((state) => state.usersData.value);
  let usersLog = useSelector((state) => state.usersData.login);

  const exitRoom = () => {
    dispatch(clear(false));
    sessionStorage.clear();
  };

  return (
    <>
      <div className="wrapper__useroom">
        <h1>Your room</h1>
        <Link className="link__style" to="/login/useroom/scanemail">
          Scan QR or Enter ID
        </Link>
        <ul>
          <li>
            ID:
            <span>{usersData[0].id}</span>
          </li>
          <li>
            Email:
            <span>{usersData[0].email}</span>
          </li>
          <li>Your QR</li>
          <div className="qr">
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
    </>
  );
}

export default UserRoom;
