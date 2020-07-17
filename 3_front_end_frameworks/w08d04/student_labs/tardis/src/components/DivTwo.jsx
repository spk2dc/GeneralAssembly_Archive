import React from 'react';
import DivThree from './DivThree';

class DivTwo extends React.Component {

    render() {
        return (
            <div>
                <DivThree
                    tardis={this.props.tardis}
                    tardis2={this.props.tardis2}
                    changeIt={this.props.changeIt} />
                <DivThree
                    tardis={this.props.tardis}
                    tardis2={this.props.tardis2}
                    changeIt={this.props.changeIt} />
            </div>

        )
    }
}

export default DivTwo