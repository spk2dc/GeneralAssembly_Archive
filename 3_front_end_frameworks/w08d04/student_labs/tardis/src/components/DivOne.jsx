import React from 'react';
import DivTwo from './DivTwo'

class DivOne extends React.Component {
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
                <DivTwo
                    state={this.state}
                    changeIt={this.changeIt} />
            </div>
        )
    }
}

export default DivOne