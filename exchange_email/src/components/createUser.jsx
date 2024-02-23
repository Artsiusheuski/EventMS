import { useState } from "react";
import registration from "../actions/registration";

function CreateUser() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("The email won't be empty");
  const [passwordError, setPasswordError] = useState("Input password");

  const emailHundler = (event) => {
    setUserEmail(event.target.value);

    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError("The Email no-correct");
    } else {
      setEmailError("");
    }
  };

  const passwordHundler = (event) => {
    setUserPassword(event.target.value.trim());
    if (event.target.value.length < 5 || event.target.value.length > 9) {
      setPasswordError(
        "The password must contain at least 5 and no more than 9 characters."
      );
    } else {
      setPasswordError("");
    }
  };

  const blurHundler = (event) => {
    switch (event.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
  const clearForm = () => {
    emailError || (passwordError && setFormValid(false));
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
          onInput={emailHundler}
          onBlur={blurHundler}
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
          onInput={passwordHundler}
          onBlur={blurHundler}
          name="password"
          value={userPassword}
          type="password"
          placeholder="Enter your password....."
        />

        <button
          disabled={emailError || passwordError}
          onClick={() => registration(userEmail, userPassword)}>
          Send
        </button>

        <button formAction="reset" type="reset" onClick={clearForm}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
