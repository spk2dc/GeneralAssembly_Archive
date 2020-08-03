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

    return promise;
  };

  return (
    <form action='' method='POST'>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' />
      <label htmlFor='owner'>Owner</label>
      <input type='text' />
      <label htmlFor='breed'>Breed</label>
      <input type='text' />
    </form>
  );
};

export default Form;
