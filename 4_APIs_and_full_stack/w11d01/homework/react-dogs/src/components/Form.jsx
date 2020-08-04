import React, { useState } from "react";

const Form = () => {
  //State Hook
  const [inputs, setInputs] = useState([]);

  const createDogs = async () => {
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Snoopy", owner: "Ben", breed: "Beagle" }),
    };

    const response = await fetch(
      "http://localhost:8000/api/v1/dogs/",
      requestOptions
    );
    const promise = await response.json();
    console.log(`createDogs -> promise`, promise);
  };

  return (
    <form action={createDogs()} method='POST'>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' name='name' />
      <br />
      <label htmlFor='owner'>Owner</label>
      <input type='text' id='owner' name='owner' />
      <br />
      <label htmlFor='breed'>Breed</label>
      <input type='text' id='breed' name='breed' />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
