import React, { useState } from "react";

const Form = () => {
  //State Hook
  const [inputs, setInputs] = useState({
    name: "",
    owner: "",
    breed: "",
  });

  const createDogs = () => {
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputs.name,
        owner: inputs.owner,
        breed: inputs.breed,
      }),
    };

    fetch("http://localhost:8000/api/v1/dogs/", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(`createDogs -> data`, data);
      })
      .catch((err) => {
        console.log(`createDogs -> err`, err);
      });

    setInputs({
      name: "",
      owner: "",
      breed: "",
    });
  };

  const handleChange = (event) => {
    let name = "name" == event.target.name ? event.target.value : inputs.name;
    let owner =
      "owner" == event.target.name ? event.target.value : inputs.owner;
    let breed =
      "breed" == event.target.name ? event.target.value : inputs.breed;

    setInputs({
      name: name,
      owner: owner,
      breed: breed,
    });
  };

  return (
    <form onSubmit={""} method='POST'>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label htmlFor='owner'>Owner</label>
      <input
        type='text'
        id='owner'
        name='owner'
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label htmlFor='breed'>Breed</label>
      <input
        type='text'
        id='breed'
        name='breed'
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
