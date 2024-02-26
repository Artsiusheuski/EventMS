import { useEffect, useState } from "react";
import login from "../actions/login";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData, clear } from "../reduxeStore/dataSlice";
import { useSelector } from "react-redux";

function LoginUser() {
  const dispatch = useDispatch();
  const loginOnOff = useSelector((state) => state.usersData.login);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginOk, setLogin] = useState(loginOnOff);
  const [data, setData] = useState(JSON.parse(sessionStorage.getItem("key")));

  const clearForm = () => {
    setUserPassword(""), setUserEmail("");
  };

  useEffect(() => {
    dispatch(getData(data));
    dispatch(clear(loginOk));
  }, [data, loginOk]);

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

        <button
          onClick={(event) =>
            login(event, userEmail, userPassword, setData, setLogin)
          }>
          Login
        </button>

        <button onClick={() => clearForm()} type="reset">
          Reset
        </button>
      </form>
      {loginOnOff && <Navigate to="/login/useroom" />}
    </div>
  );
}

export default LoginUser;
