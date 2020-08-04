import React, { useState } from "react";

export default function Login() {
  //State Hook
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit='' method='POST'>
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
          type='text'
          id='password'
          name='password'
          value={inputs.password}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
