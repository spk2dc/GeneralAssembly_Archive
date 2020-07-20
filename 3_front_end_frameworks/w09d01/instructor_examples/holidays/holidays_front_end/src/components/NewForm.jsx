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
        this.props.addHoliday({
            name: this.state.name,
        });
    }

    render() {
        return (
            <form onSubmit={ (evt) => this.handleSubmit(evt) }>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name"
                    onChange={ (evt) => this.handleChange(evt) }
                    value={ this.state.name }/>
                <input type="submit" value="Add a Reason to Celebrate"/>
            </form>
        )
    }
}
