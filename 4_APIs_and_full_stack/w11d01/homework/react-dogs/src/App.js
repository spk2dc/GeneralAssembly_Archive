import React, { useState } from "react";
import "./App.css";
import DogTable from "./components/DogTable";
import Form from "./components/Form";
import DogEdit from "./components/DogEdit";

function App() {
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
    <div className='App'>
      <h1 className='mainHeader'>Dog Lab/HW</h1>
      <Form getDogs={() => getDogs()} />
      <div>
        <DogTable allRows={allRows} getDogs={getDogs} showEdit={showEdit} />
        <DogEdit currEdit={currEdit} getDogs={getDogs} />
      </div>
    </div>
  );
}

export default App;
