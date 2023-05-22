import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password === reEnterPassword) {
      axios.post("", user).then((res) => {
        alert("registered successfully");
        console.log(res);
      });
    } else {
      alert("invalid input");
    }
  };
  return (
    <>
    <div className="reg">
    
      <div className="navbar_text sticky ">
      </div>
     
        <div className="logo" >
         
            <img
              src="https://www.logo.wine/a/logo/SpaceX/SpaceX-Logo.wine.svg"
              alt="SpaceX Logo" onClick={()=>{navigate('/main')}}
            />
          </div>
        </div>
        
       <div className="container1">
        <div className="head1">
      <div className="register">
        <h1>Create New Account</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          user={user.email}
          placeholder="Enter your E-mail"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        />
        <div className="button" onClick={register}>
          Register
        </div>
        <div>or</div>
        <div
          className="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Register;
