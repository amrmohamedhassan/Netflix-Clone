import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  //states
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();

  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/Users/" + Email)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id === Email && data.password === Password) {
          setIncorrect(false);
          navigate("/accounts");
        } else {
          if (data.id !== Email || data.password !== Password) {
            setIncorrect(true);
          }
        }
      })
      .catch((err) => {
        alert("Login Failed: " + err.message);
      });
  };

  return (
    <div className="Login">
      <div className="wrapper"></div>
      <nav className="navbar">
        <img src="/Imgs/Logo.svg" alt="" />
      </nav>
      <main>
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-input"
            required
            value={Email}
            type="Email"
            name="id"
            placeholder="Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-input"
            required
            value={Password}
            type="password"
            name="password"
            placeholder="Password"
          />
          {incorrect && <p className="err">Email or Password incorrect</p>}
          <input
            className="submit form-input"
            type="submit"
            name="submit"
            value="Sign In"
          />
          <div className="remember">
            <div className="check">
              <input type="checkbox" name="remember" id="rem" />
              <label htmlFor="rem">Remember me</label>
            </div>
            <small>Need help?</small>
          </div>
          <div className="disc">
            <span className="google">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </span>
            <span> Learn more.</span>
          </div>
        </form>
      </main>
      <footer>
        <div className="cont">
          <Link>Questions? Contact US.</Link>
          <ul className="list">
            <Link>
              <li>FAQ</li>
            </Link>
            <Link>
              <li>Cancel Membership</li>
            </Link>
            <Link>
              <li>Help Center</li>
            </Link>
            <Link>
              <li>Netflix Shop</li>
            </Link>
            <Link>
              <li>Terms Of Use</li>
            </Link>
            <Link>
              <li>Privacy</li>
            </Link>
            <Link>
              <li>Cookie Preferences</li>
            </Link>
            <Link>
              <li>Impressum</li>
            </Link>
            <Link>
              <li>Ad Choices</li>
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Login;
