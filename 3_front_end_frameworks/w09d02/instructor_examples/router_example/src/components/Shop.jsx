import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Shop(props) {
    if (props.redirect) {
        return <Redirect to='/'/>
    }
    return (
        <div>
            <h1>This is the Shop!</h1>
            <h2>{props.message}</h2>
            <button onClick={() => props.handleRedirect()}>CLICK ME</button>
        </div>
    )
}
