import React, { useState } from "react";

export default function Register() {
  //State Hook
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let username =
      "username" === event.target.name ? event.target.value : inputs.username;
    let email =
      "email" === event.target.name ? event.target.value : inputs.email;
    let password =
      "password" === event.target.name ? event.target.value : inputs.password;

    setInputs({
      username: username,
      email: email,
      password: password,
    });
  };

  const register = (event) => {
    event.preventDefault();

    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      }),
    };
    // console.log(`register -> inpObj`, inpObj);

    fetch("http://localhost:8000/user/register", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(`register -> data`, data);
      })
      .catch((err) => {
        console.log(`register -> err`, err);
      });

    setInputs({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => register(e)} method='POST'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          value={inputs.username}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          value={inputs.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={inputs.password}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}
