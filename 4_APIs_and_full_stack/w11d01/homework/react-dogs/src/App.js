import React from "react";
import "./App.css";
import DogTable from "./components/DogTable";
import Form from "./components/Form";

function App() {
  return (
    <div className='App'>
      <header className='mainHeader'>Dog Lab/HW</header>
      <Form />
      <DogTable />
    </div>
  );
}

export default App;
