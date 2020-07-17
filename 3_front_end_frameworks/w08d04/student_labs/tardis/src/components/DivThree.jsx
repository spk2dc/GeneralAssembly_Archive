import React from 'react';

class DivThree extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3 onClick={() => this.props.changeIt(this.props.state.tardis.name)}>{this.props.state.tardis.name}</h3>
            </div>
        )
    }
}

export default DivThree