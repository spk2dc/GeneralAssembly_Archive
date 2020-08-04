import React, { useEffect } from "react";

const DogTable = ({ allRows, getDogs }) => {
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
