import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} >
                <label htmlFor="birdName">
                    Name
                  <input
                        type="text"
                        id="birdName"
                        value={this.props.state.birdName}
                        onChange={this.props.handleChange}
                    />
                </label>
                <br />
                <label htmlFor="image">
                    Image
                  <input
                        type="text"
                        id="image"
                        value={this.props.state.image}
                        onChange={this.props.handleChange}
                    />
                </label>
                <br />
                <label htmlFor="user">
                    User
                  <input
                        type="text"
                        id="user"
                        value={this.props.state.user}
                        onChange={this.props.handleChange}
                    />
                </label>
                <br />
                <label htmlFor="approved">
                    Approved
                    <input
                        type="checkbox"
                        name="approved"
                        id="approved"
                        checked={this.props.state.approved==='on' ? true : false}
                        onChange={this.props.handleChange}
                    />

                </label>
                <br />
                <input type="submit" />
            </form>
        )
    }

}

export default Form