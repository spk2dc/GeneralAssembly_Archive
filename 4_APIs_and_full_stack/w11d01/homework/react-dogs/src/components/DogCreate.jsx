import React, { useState } from "react";

const DogCreate = ({ getDogs }) => {
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
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inpObj.name,
        owner: inpObj.owner,
        breed: inpObj.breed,
      }),
    };
    // console.log(`createDogs -> inpObj`, inpObj);

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
    let num = Math.floor(Math.random() * 100);

    let seed = [
      {
        name: `dog_${num}`,
        owner: `owner_${num}`,
        breed: `breed_${num}`,
      },
      {
        name: `dog_${num + 1}`,
        owner: `owner_${num + 1}`,
        breed: `breed_${num + 1}`,
      },
      {
        name: `dog_${num + 2}`,
        owner: `owner_${num + 2}`,
        breed: `breed_${num + 2}`,
      },
      {
        name: `dog_${num + 3}`,
        owner: `owner_${num + 3}`,
        breed: `breed_${num + 3}`,
      },
    ];

    seed.map((val, i) => {
      setInputs({
        name: val.name,
        owner: val.owner,
        breed: val.breed,
      });

      // console.log(`seedDogs -> inputs`, inputs);
      createDogs(event, val);
      return val;
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

      <br />
      <form onSubmit={(e) => seedDogs(e)} method='POST'>
        <button type='submit'>Seed Database</button>
      </form>
      <br />
    </div>
  );
};

export default DogCreate;
