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

        // this.props.changeIt = this.props.changeIt.bind(this)
    }

    render() {
        return (
            <div>
                <DivTwo
                    state={this.props.state}
                    changeIt={this.props.changeIt} />
            </div>
        )
    }
}

export default DivOne