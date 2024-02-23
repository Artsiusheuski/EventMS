import { useState } from "react";
import login from "../actions/login";

function LoginUser() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const clearForm = () => {
    setUserPassword(""), setUserEmail("");
  };

  return (
    <div>
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

        <button onClick={() => login(userEmail, userPassword)}>Login</button>

        <button onClick={() => clearForm()} type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}

export default LoginUser;
