import React from 'react';
import { Link } from 'react-router-dom';

import DogEditForm from './DogEditForm';
import DogList from './DogList';
import DogNewForm from './DogNewForm';

class DogContainer extends React.Component {
    state = {
        dogs: [],
        idOfDogToEdit: -1,
        dogCurrentlyBeingEdited: null,
    }

    createDog(dog) {
        fetch('http://localhost:8000/api/v1/dogs/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(dog),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            const newDogs = [ ...this.state.dogs, data.data ];
            this.setState({
                dogs: newDogs,
            });
        });
    }

    editDog(id, dog) {
        this.setState({
            idOfDogToEdit: id,
            dogCurrentlyBeingEdited: {
                name: dog.name,
                breed: dog.breed,
            },
        });
    }

    updateDog() {
        const id = this.state.idOfDogToEdit;
        fetch('http://localhost:8000/api/v1/dogs/' + id, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(this.state.dogCurrentlyBeingEdited),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            const newDogs = [ ...this.state.dogs ];
            const i = newDogs.findIndex(dog => dog.id === id)
            newDogs[i] = data.data;
            this.setState({
                dogs: newDogs,
                idOfDogToEdit: -1,
                dogCurrentlyBeingEdited: null,
            });
        });
    }

    deleteDog(id) {
        fetch('http://localhost:8000/api/v1/dogs/' + id, {
            method: 'DELETE',
            credentials: 'include',
        }).then(() => {
            const newDogs = this.state.dogs.filter(dog => dog.id !== id);
            this.setState({
                dogs: newDogs,
            });
        });
    }

    handleLogoutClick(evt) {
        evt.preventDefault();
        fetch('http://localhost:8000/user/logout', {
            credentials: 'include',
        }).then(() => {
            this.setState({
                dogs: [],
                idOfDogToEdit: -1,
                dogCurrentlyBeingEdited: null,
            });
        });
    }

    handleEditChange(evt) {
        const newDog = { ...this.state.dogCurrentlyBeingEdited };
        newDog[evt.target.id] = evt.target.value;
        this.setState({
            dogCurrentlyBeingEdited: newDog,
        });
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/v1/dogs/', {
            credentials: 'include',
        }).then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                dogs: data.data,
            });
        });
    }

    render() {
        return (
            <>
                <div><Link to="/login">Log in</Link></div>
                <div><Link to="/register">Register</Link></div>
                <div><a href="#" onClick={ (evt) => this.handleLogoutClick(evt) }>Log out</a></div>
                <DogList dogs={ this.state.dogs }
                    editDog={ (id, dog) => this.editDog(id, dog) }
                    deleteDog={ (id) => this.deleteDog(id) }/>
                { this.state.idOfDogToEdit >= 0 ?
                    <DogEditForm
                        dog={ this.state.dogCurrentlyBeingEdited }
                        handleChange={ (evt) => this.handleEditChange(evt) }
                        updateDog={ () => this.updateDog() }/>
                : null }
                <DogNewForm createDog={ (dog) => this.createDog(dog) }/>
            </>
        )
    }
}

export default DogContainer;
