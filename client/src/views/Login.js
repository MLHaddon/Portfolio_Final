import axios from "../api/axios";
import { useState} from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";


function Login() {

  // Add user and errors to the state
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // Variables
  const [msg, setMsg] = useState('');

  // Active form handling (Updates with the state)
  const handleFormChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
    
  // Send an axios request to log the user in
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("api/auth/login", {
          username: user.username,
          password: user.password
        });
        localStorage.setItem("userAuth", true)
        if (localStorage.getItem("userAuth") === true) {window.location.href = "/"};
    } catch (error) {
      console.log(error);
      if (error) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="mw-50 m-auto" style={{ width: "400px" }}>
      <p className="has-text-centered">{msg}</p>
      <LoginForm
        inputs={user}
        handleChange={handleFormChange}
        handleSubmit={handleFormSubmit}
      />
      <p className="forgot-password text-right">
        Forgot <Link to="../">password?</Link>
      </p>
    </div>
  );
}

export default Login;
