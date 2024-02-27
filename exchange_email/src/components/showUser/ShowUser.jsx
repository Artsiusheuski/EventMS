import "./showUser.css";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import checkID from "../../actions/checkID";

function ShowUser() {
  const [qrResult, setQrResult] = useState("email...");
  const [orderMethodEnter, setOrderMethodEnter] = useState("Enter ID");
  const [userID, setUserID] = useState("");

  function changeMethod() {
    orderMethodEnter === "Enter ID"
      ? setOrderMethodEnter("Scan QR")
      : setOrderMethodEnter("Enter ID");
  }

  return (
    <div className="wrapper__showUser">
      <div>
        <button onClick={() => changeMethod()}>{orderMethodEnter}</button>
      </div>
      {orderMethodEnter === "Scan QR" && (
        <div>
          <label htmlFor="">Enter ID</label>
          <input
            onChange={(e) => setUserID(e.target.value)}
            type="text"
            placeholder="enter id"
          />
          <button onClick={(e) => checkID(e, userID, setQrResult)}>
            Check ID
          </button>
          <p>{qrResult}</p>
        </div>
      )}
      {orderMethodEnter !== "Scan QR" && (
        <div>
          <div className="qrScan__wrapper">
            <QrScanner onDecode={(result) => setQrResult(result)} />
          </div>
          <p>{qrResult}</p>
        </div>
      )}
    </div>
  );
}

export default ShowUser;
