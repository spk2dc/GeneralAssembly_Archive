import React from 'react';
import DivThree from './DivThree';

class DivTwo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <DivThree
                    state={this.props.state}
                    changeIt={this.props.changeIt} />
                <DivThree
                    state={this.props.state}
                    changeIt={this.props.changeIt} />
            </div>

        )
    }
}

export default DivTwo