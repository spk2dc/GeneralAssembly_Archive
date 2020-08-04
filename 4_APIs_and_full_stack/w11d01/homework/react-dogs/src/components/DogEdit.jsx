import React, { useState } from "react";

const DogEdit = ({ getDogs }) => {
  //State Hook
  const [inputs, setInputs] = useState({
    name: "",
    owner: "",
    breed: "",
  });

  const editDogs = (event, inpObj) => {
    event.preventDefault();

    let requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inpObj.name,
        owner: inpObj.owner,
        breed: inpObj.breed,
      }),
    };
    console.log(`editDogs -> inpObj`, inpObj);

    fetch("http://localhost:8000/api/v1/dogs/", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(`editDogs -> data`, data);
      })
      .catch((err) => {
        console.log(`editDogs -> err`, err);
      });

    setInputs({
      name: "",
      owner: "",
      breed: "",
    });

    getDogs();
  };

  const handleChange = (event) => {
    let name = "name" === event.target.name ? event.target.value : inputs.name;
    let owner =
      "owner" === event.target.name ? event.target.value : inputs.owner;
    let breed =
      "breed" === event.target.name ? event.target.value : inputs.breed;

    setInputs({
      name: name,
      owner: owner,
      breed: breed,
    });
  };

  return (
    <div id='editDiv'>
      <h3>Edit Form</h3>
      <form id='editForm' onSubmit={(e) => editDogs(e, inputs)} method='POST'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={inputs.name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor='owner'>Owner</label>
        <input
          type='text'
          id='owner'
          name='owner'
          value={inputs.owner}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor='breed'>Breed</label>
        <input
          type='text'
          id='breed'
          name='breed'
          value={inputs.breed}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button type='submit'>Submit Edit</button>
      </form>
    </div>
  );
};

export default DogEdit;
