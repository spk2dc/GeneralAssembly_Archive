import React from 'react';

class DogEditForm extends React.Component {
    render() {
        return (
            <>
                <h1>Edit Dog</h1>
                <div>
                    Name:
                    <input type="text" id="name" value={ this.props.dog.name }
                        onChange={ (evt) => this.props.handleChange(evt) }/>
                </div>
                <div>
                    Breed:
                    <input type="text" id="breed" value={ this.props.dog.breed }
                        onChange={ (evt) => this.props.handleChange(evt) }/>
                </div>
                <div>
                    <input type="submit" value="Update dog"
                        onClick={ () => this.props.updateDog() }/>
                </div>
            </>
        )
    }
}

export default DogEditForm;
