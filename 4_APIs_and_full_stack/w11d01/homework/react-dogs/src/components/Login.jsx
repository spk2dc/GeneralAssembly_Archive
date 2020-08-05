import React, { useState } from "react";

export default function Login() {
  //State Hook
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState({
    bool: false,
    data: {},
  });

  const handleChange = (event) => {
    let email =
      "email" === event.target.name ? event.target.value : inputs.email;
    let password =
      "password" === event.target.name ? event.target.value : inputs.password;

    setInputs({
      email: email,
      password: password,
    });
  };

  const login = (event) => {
    event.preventDefault();

    let requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    };
    // console.log(`register -> inpObj`, inpObj);

    fetch("http://localhost:8000/user/login", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(`register -> data`, data);
        setLoggedIn({
          bool: true,
          data: data,
        });
      })
      .catch((err) => {
        console.log(`register -> err`, err);
        setLoggedIn({
          bool: true,
          data: err,
        });
      });

    setInputs({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => login(e)} method='POST'>
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
        <button type='submit'>Login</button>
      </form>
      <br />
      <div>
        <p>Status: </p>
        {loggedIn.bool ? <p>{loggedIn.data.status.message}</p> : <p></p>}
      </div>
    </div>
  );
}
