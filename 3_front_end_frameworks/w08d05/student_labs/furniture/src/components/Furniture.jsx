import React from 'react'
import ListItem from './ListItem'

export default class Furniture extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.furniture.map((val, i) => {
                        return (
                            <ListItem
                                key={i}
                                piece={val.piece}
                                recommendationMade={val.recommendationMade}
                                id={val.id}
                                restore={() => this.props.restore()} />
                        )

                    })
                }
            </ul>
        )
    }
}