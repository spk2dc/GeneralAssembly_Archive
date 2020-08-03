import React, { useState, useEffect } from "react";

const DogTable = () => {
  //State Hook
  const [allRows, setAllRows] = useState([]);

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

  const getDogs = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch("http://localhost:8000/api/v1/dogs/", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(`getDogs -> data`, data.data);

        setAllRows(data.data);
        console.log(`getDogs -> allRows`, allRows);
      });
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Owner</th>
          <th>Breed</th>
        </tr>
      </thead>
      <tbody>
        {allRows.map((val, i) => {
          console.log(`getDogs -> val`, val.id, val.name);
          return (
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.owner}</td>
              <td>{val.breed}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DogTable;
