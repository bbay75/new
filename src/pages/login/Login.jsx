import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="lodinTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Passord</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
