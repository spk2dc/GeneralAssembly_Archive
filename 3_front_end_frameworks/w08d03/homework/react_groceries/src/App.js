import React from 'react';

const groceries = [
  {
    "item": 'bananas',
    "brand": 'dole',
    "units": '1 bushel',
    "quantity": 10,
    "isPurchased": true
  },
  {
    "item": 'potatos',
    "brand": 'irish',
    "units": '1 item',
    "quantity": 18,
    "isPurchased": false
  },
  {
    "item": 'carrots',
    "brand": 'organic',
    "units": '1 handful',
    "quantity": 1,
    "isPurchased": true
  }
]
console.log(`groceries: `, groceries)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: groceries,
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}