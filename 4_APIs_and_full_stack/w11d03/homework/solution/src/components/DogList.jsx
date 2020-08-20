import React from 'react';

class DogList extends React.Component {
    render() {
        return (
            <>
                <h1>Dogs</h1>
                {
                    this.props.dogs.map(dog => {
                        return (
                            <div key={ dog.id }>
                                { dog.name }
                                <input type="submit" value="Edit dog"
                                    onClick={ () => this.props.editDog(dog.id, dog) }/>
                                <input type="submit" value="Delete dog"
                                    onClick={ () => this.props.deleteDog(dog.id) }/>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default DogList;
