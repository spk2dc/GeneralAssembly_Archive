import React, { useState } from "react";
import "./App.css";
import DogTable from "./components/DogTable";
import Form from "./components/Form";

function App() {
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

  return (
    <div className='App'>
      <header className='mainHeader'>Dog Lab/HW</header>
      <Form getDogs={() => getDogs()} />
      <DogTable allRows={allRows} getDogs={() => getDogs()} />
    </div>
  );
}

export default App;
