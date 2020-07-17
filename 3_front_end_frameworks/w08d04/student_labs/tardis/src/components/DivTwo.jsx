import React from 'react';
import DivThree from './DivThree';

class DivTwo extends React.Component {
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
                <DivThree
                    state={this.state}
                    changeIt={this.changeIt} />
                <DivThree
                    state={this.state}
                    changeIt={this.changeIt} />
            </div>

        )
    }
}

export default DivTwo