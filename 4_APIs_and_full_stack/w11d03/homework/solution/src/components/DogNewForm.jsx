import React from 'react';

class DogNewForm extends React.Component {
    state = {
        name: '',
        breed: '',
    }

    handleChange(evt) {
        this.setState({
            [evt.target.id]: evt.target.value,
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createDog({
            name: this.state.name,
            breed: this.state.breed,
        });
        this.setState({
            name: '',
            breed: '',
        });
    }

    render() {
        return (
            <>
                <h1>Create Dog</h1>
                <div>
                    Name:
                    <input type="text" id="name" value={ this.state.name }
                        onChange={ (evt) => this.handleChange(evt) }/>
                </div>
                <div>
                    Breed:
                    <input type="text" id="breed" value={ this.state.breed }
                        onChange={ (evt) => this.handleChange(evt) }/>
                </div>
                <div>
                    <input type="submit" value="Create dog"
                        onClick={ (evt) => this.handleSubmit(evt) }/>
                </div>
            </>
        )
    }
}

export default DogNewForm;
