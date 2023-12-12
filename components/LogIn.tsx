import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../styles.css"
import Link from "next/link";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>

        <p className="mt-4 text-gray-600 text-center">
           Dont have an account? 
           <Link href="/signIn" >   Sign Up</Link>
         </p>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        
        <div className="title">Log In your Account</div>
        <p className="description">Step into the world of satta matka by loggin into your account today</p>
        <p className="description">Predict wisely,Join the game,and let the winning journey unlock!!!!!</p>
        <div className="title">Enter Your Credentials!!!</div>
        {isSubmitted ? <div>User is successfully logged in    
            <Link href="/">Go TO DASHBOARD</Link>
        </div> : renderForm}
      </div>
    </div>
  );
}

export default Login;