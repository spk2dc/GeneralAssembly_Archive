import React, { Component } from 'react'

export default function Form(App, handleChange, handleSubmit) {
    return (
        <form onSubmit={App.handleSubmit}>

            <label htmlFor="birdName">
                Name
              <input
                    type="text"
                    id="birdName"
                    value={App.birdName}
                    onChange={App.handleChange}
                />
            </label>
            <br />
            <label htmlFor="image">
                Image
              <input
                    type="text"
                    id="image"
                    value={App.image}
                    onChange={App.handleChange}
                />
            </label>
            <br />
            <label htmlFor="user">
                User
              <input
                    type="text"
                    id="user"
                    value={App.user}
                    onChange={App.handleChange}
                />
            </label>
        </form>
    )
}