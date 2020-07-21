import React, { Component } from 'react'

export default class NewForm extends Component {
    state = {
        name: '',
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/shelter', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            this.props.addAnimal(data);
            this.setState({
                name: '',
            });
        }).catch(err => {
            console.log(`NewForm -> handleSubmit -> err`, err)
        })
    }

    render() {
        return (
            <form onSubmit={(evt) => this.handleSubmit(evt)}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name"
                    onChange={(evt) => this.handleChange(evt)}
                    value={this.state.name} />
                <input type="submit" value="Add animal" />
            </form>
        )
    }
}
