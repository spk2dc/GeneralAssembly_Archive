import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import DogPage from "./components/DogPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Error from "./components/Error";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/user/register' component={Register} />
        <Route exact path='/user/login' component={Login} />
        <Route exact path='/dog' render={() => <DogPage />} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
