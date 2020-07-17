import React from 'react';

class DivThree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tardis: {
                name: this.props.state.tardis.name,
                caps: this.props.state.tardis.caps,
            }
        }

        this.changeIt = this.props.changeIt
    }

    render() {
        return (
            <div>
                <h3 onClick={() => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
            </div>
        )
    }
}

export default DivThree