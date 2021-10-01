import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import "./navbar.css";


function Nav() {
  // const { state, dispatch } = useContext(GlobalContext);

  const logout = () => {
  // dispatch({ type: "SIGNOUT_USER"});
  };

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
        <li onClick={logout()}><a>Log Out</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
