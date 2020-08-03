import React, { useState, useEffect } from "react";

const DogTable = () => {
  //State Hook
  const [allRows, setAllRows] = useState([]);

  const getDogs = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch("http://localhost:8000/api/v1/dogs/", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllRows(data.data);
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
