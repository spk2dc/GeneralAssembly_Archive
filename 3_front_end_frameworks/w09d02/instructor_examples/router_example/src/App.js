import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import NavBar from './components/NavBar'
import Error from './components/Error'

export default class App extends Component {
  state = {
    message: 'Hello',
    redirect: false
  }

  handleRedirect = () => {
    this.setState({
      redirect: !this.state.redirect
    })
  }

  componentDidUpdate() {
    if (this.state.redirect) {
      this.setState({
        redirect: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route
            exact path='/shop'
            render={() => <Shop message={this.state.message}
              redirect={this.state.redirect}
              handleRedirect={this.handleRedirect}
            />}
          />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}
