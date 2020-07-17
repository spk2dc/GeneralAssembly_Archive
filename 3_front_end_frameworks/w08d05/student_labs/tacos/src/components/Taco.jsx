import React from 'react';
import ItemDisplay from './ItemDisplay';

export default class Taco extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.allKeys.map((val, i) => {
                            return (
                                <ItemDisplay
                                    key={i}
                                    name={val}
                                    item={this.props.taco[val]} />
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}

