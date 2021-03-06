import React, { useState } from "react";
import DogTable from "./DogTable";
import DogCreate from "./DogCreate";
import DogEdit from "./DogEdit";

export default function DogPage() {
  //State Hook
  const [allRows, setAllRows] = useState([]);
  const [currEdit, setCurrEdit] = useState({
    id: -1,
    name: "",
    owner: "",
    breed: "",
  });

  const getDogs = () => {
    let requestOptions = {
      method: "GET",
      credentials: "include",
    };

    fetch("http://localhost:8000/api/v1/dogs/", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllRows(data.data);
      });
  };

  const showEdit = (event, oneDog) => {
    event.preventDefault();
    setCurrEdit(oneDog);
  };

  return (
    <div>
      <h1 className='mainHeader'>Dog Lab/HW</h1>
      <DogCreate getDogs={() => getDogs()} />
      <div>
        <DogTable allRows={allRows} getDogs={getDogs} showEdit={showEdit} />
        <DogEdit currEdit={currEdit} getDogs={getDogs} />
      </div>
    </div>
  );
}
