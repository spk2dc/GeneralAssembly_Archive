import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DogContainer from './components/DogContainer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ DogContainer }/>
                <Route exact path='/login' component={ Login }/>
                <Route exact path='/register' component={ Register }/>
            </Switch>
        </Router>
    );
}

export default App;
