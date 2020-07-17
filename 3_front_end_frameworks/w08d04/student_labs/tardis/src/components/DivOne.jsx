import React from 'react';
import DivTwo from './DivTwo'

class DivOne extends React.Component {
    render() {
        return (
            <div>
                <DivTwo
                    tardis={this.props.tardis}
                    tardis2={this.props.tardis2}
                    changeIt={this.props.changeIt} />
            </div>
        )
    }
}

export default DivOne