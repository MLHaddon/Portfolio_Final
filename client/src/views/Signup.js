import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from '../api/axios';
import SignupForm from '../components/signupForm';

function Signup() {
  const [user, setUser] = useState({
    username:'',
    email:'',
    password:'',
    confPwd:''
  });


  const [errors] = useState([]);
  const [msg, setMsg] = useState('');

  const handleFormChange = e => { // setUser to search the user object for target name (create if not exist), then set each value.
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('api/auth/signup', {
        username: user.username,
        email: user.email,
        password: user.password,
        confPwd: user.confPwd
      });
      localStorage.setItem("userAuth", true);
      window.location.href = "/";
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <div className="mw-50 m-auto" style={{width: "400px"}} >
      <p className="has-text-centered">{msg}</p>
      <SignupForm
        inputs = {user}
        errors = {errors}
        handleChange = {handleFormChange}
        handleSubmit = {handleFormSubmit}
      />
      <p className="text-right">
        Already registered <Link to="../login">log in?</Link>
      </p>
    </div>
  );
}

export default Signup;