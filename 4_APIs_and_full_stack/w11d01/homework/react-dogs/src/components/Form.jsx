import React, { useState } from "react";

const Form = ({ getDogs }) => {
  //State Hook
  const [inputs, setInputs] = useState({
    name: "",
    owner: "",
    breed: "",
  });

  const createDogs = (event, inpObj) => {
    event.preventDefault();

    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inpObj.name,
        owner: inpObj.owner,
        breed: inpObj.breed,
      }),
    };
    console.log(`createDogs -> inpObj`, inpObj);

    fetch("http://localhost:8000/api/v1/dogs/", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(`createDogs -> data`, data);
      })
      .catch((err) => {
        console.log(`createDogs -> err`, err);
      });

    setInputs({
      name: "",
      owner: "",
      breed: "",
    });

    getDogs();
  };

  const seedDogs = (event) => {
    event.preventDefault();

    let seed = [
      {
        name: "dog1",
        owner: "owner1",
        breed: "breed1",
      },
      {
        name: "dog2",
        owner: "owner2",
        breed: "breed2",
      },
      {
        name: "dog3",
        owner: "owner3",
        breed: "breed3",
      },
      {
        name: "dog4",
        owner: "owner4",
        breed: "breed4",
      },
    ];

    seed.map((val, i) => {
      setInputs({
        name: val.name,
        owner: val.owner,
        breed: val.breed,
      });

      console.log(`seedDogs -> inputs`, inputs);
      console.log(`seedDogs -> val`, val);
      createDogs(event, val);
      return;
    });
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
    <div>
      <form onSubmit={(e) => createDogs(e, inputs)} method='POST'>
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
        <button type='submit'>Submit</button>
      </form>

      <form onSubmit={(e) => seedDogs(e)} method='POST'>
        <button type='submit'>Seed Database</button>
      </form>
    </div>
  );
};

export default Form;
