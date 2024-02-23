import { NavLink } from "react-router-dom";
import "./navigation.css";

function NavBar() {
  return (
    <nav>
      <ul className="nav__wrapper">
        <li>
          <NavLink to={"/"}>Registration</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
