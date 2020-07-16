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
    // if (this.state.isPurchased == 'on') {
    //   this.state.isPurchased = true
    // } else {
    //   this.state.isPurchased = false
    // }

    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased
    }

    this.setState({
      groceries: [...groceries, newItem],
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false
    })
  }

  render() {

    let displayArr = []

    displayArr = this.state.groceries.map((item, i) => {
      return (
        item.isPurchased && <li key={i}>{item.item} | {item.brand} | {item.units} | {item.quantity}</li>
      )
    })

    return (
      <div>
        <h1>React Groceries</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor='item'>item</label>
          <input type='text' value={this.state.item} onChange={this.handleChange} id='item' />
          <br />
          <label htmlFor='brand'>brand</label>
          <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' />
          <br />
          <label htmlFor='units'>units</label>
          <input type='text' value={this.state.units} onChange={this.handleChange} id='units' />
          <br />
          <label htmlFor='quantity'>quantity</label>
          <input type='number' value={this.state.quantity} onChange={this.handleChange} id='quantity' />
          <br />
          <label htmlFor='purchased'>purchased</label>
          <input type='radio' onChange={this.handleChange} id='purchased' checked={this.state.isPurchased == true}/>
          <label htmlFor='notpurchased'>not purchased</label>
          <input type='radio' onChange={this.handleChange} id='notpurchased' checked={this.state.isPurchased == false}/>
          <br />
          <input type='submit' />
        </form>

        <br />
        <ul>
          {
            displayArr
          }
        </ul>
      </div>
    )
  }
}

export default App