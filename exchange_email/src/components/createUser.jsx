import { useState } from "react";
import registration from "../actions/registration";
import {
  emailHundler,
  passwordHundler,
  blurHundler,
} from "../helpers/hundlers";

function CreateUser() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("The email won't be empty");
  const [passwordError, setPasswordError] = useState("Input password");

  const clearForm = () => {
    setUserEmail("");
    setUserPassword("");
    setEmailError("");
    setPasswordError("");
  };

  return (
    <div>
      <form className="wrapper__form">
        <h2>Creat acount</h2>
        {emailDirty && emailError ? (
          <div style={{ color: "red" }}>{emailError}</div>
        ) : null}

        <input
          onChange={(e) => setUserEmail(e.target.value)}
          onInput={(e) => emailHundler(e, setUserEmail, setEmailError)}
          onBlur={(e) => blurHundler(e, setEmailDirty, setPasswordDirty)}
          name="email"
          value={userEmail}
          type="email"
          placeholder="Enter your email....."
        />
        {passwordError && passwordDirty ? (
          <div style={{ color: "red" }}>{passwordError}</div>
        ) : null}

        <input
          onChange={(e) => setUserPassword(e.target.value)}
          onInput={(e) => passwordHundler(e, setUserPassword, setPasswordError)}
          onBlur={(e) => blurHundler(e, setEmailDirty, setPasswordDirty)}
          name="password"
          value={userPassword}
          type="password"
          placeholder="Enter your password....."
        />
        <button
          disabled={emailError || passwordError}
          onClick={(e) => registration(e, userEmail, userPassword)}>
          Send
        </button>
        <button onClick={clearForm} type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
