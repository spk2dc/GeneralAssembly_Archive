import React, { useEffect } from "react";

const DogTable = ({ allRows, getDogs, showEdit }) => {
  const deleteDogs = (event, id) => {
    event.preventDefault();

    let requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`http://localhost:8000/api/v1/dogs/${id}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(`deleteDogs -> data`, data);
      })
      .catch((err) => {
        console.log(`deleteDogs -> err`, err);
      });

    getDogs();
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
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {allRows.map((val, i) => {
          return (
            <tr key={`row${i}-id${val.id}`}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.owner}</td>
              <td>{val.breed}</td>
              <td>
                <button type='submit' onClick={(e) => showEdit(e, val)}>
                  Edit
                </button>
              </td>
              <td>
                <button type='submit' onClick={(e) => deleteDogs(e, val.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DogTable;
