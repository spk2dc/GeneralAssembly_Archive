import React from 'react';
import { Redirect } from 'react-router-dom';

class Register extends React.Component {
    state = {
        email: '',
        username: '',
        password: '',
        redirect: false,
    };

    handleChange(evt) {
        this.setState({ [evt.target.id]: evt.target.value });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        fetch('http://localhost:8000/user/register', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => {
            this.setState({
                redirect: true,
            });
        }).catch(err => {
            console.log('Error:', err);
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>
        }

        return (
            <>
                <h1>Sign Up</h1>
                Email:
                <input type="text" id="email"
                    onChange={ (evt) => this.handleChange(evt) }/><br/>
                Username:
                <input type="text" id="username"
                    onChange={ (evt) => this.handleChange(evt) }/><br/>
                Password:
                <input type="password" id="password"
                    onChange={ (evt) => this.handleChange(evt) }/><br/>
                <button onClick={ (evt) => this.handleSubmit(evt) }>
                    Sign up
                </button>
            </>
        );
    }
}

export default Register;
