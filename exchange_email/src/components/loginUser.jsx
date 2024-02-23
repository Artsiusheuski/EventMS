import { useState } from "react";
import login from "../actions/login";
import UserRoom from "./UserRoom";

function LoginUser() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginOk, setLogin] = useState(false);
  const [data, setData] = useState("");
  const clearForm = () => {
    setUserPassword(""), setUserEmail("");
  };

  function exitRoom() {
    setLogin(false);
    localStorage.clear();
    setUserPassword(""), setUserEmail("");
  }

  return (
    <div>
      {!loginOk && (
        <form className="wrapper__form">
          <h2>Login</h2>
          <input
            onChange={(e) => setUserEmail(e.target.value)}
            name="email"
            value={userEmail}
            type="email"
            placeholder="Enter your email....."
          />

          <input
            onChange={(e) => setUserPassword(e.target.value)}
            name="password"
            value={userPassword}
            type="password"
            placeholder="Enter your password....."
          />

          <button
            onClick={(e) => login(userEmail, userPassword, setLogin, setData)}>
            Login
          </button>

          <button onClick={() => clearForm()} type="reset">
            Reset
          </button>
        </form>
      )}
      {loginOk && <UserRoom exitRoom={exitRoom} userData={data} />}
    </div>
  );
}

export default LoginUser;
