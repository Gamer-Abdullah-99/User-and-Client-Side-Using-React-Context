import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import "./navbar.css";

const { state, dispatch } = useContext(GlobalContext);

const addUser = (a) => {
  console.log("newuser", a);
  dispatch({ type: "SIGNUP_USER", payload: a });
};

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">SignUp</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li onClick={}><a>Log Out</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
