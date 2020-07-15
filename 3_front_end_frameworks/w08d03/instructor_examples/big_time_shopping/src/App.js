import React from 'react';

const products = [
  {
    "name": "allen wrench",
    "price": 2.99,
    "description": "handy tool"
  },
  {
    "name": "cornucopia",
    "price": 5.99,
    "description": "festive holiday decoration"
  },
  {
    "name": "banana",
    "price": 0.99,
    "description": "full of potassium"
  },
  {
    "name": "guillotine (cigar)",
    "price": 10.59,
    "description": "behead your stub"
  },
  {
    "name": "jack-o-lantern",
    "price": 3.99,
    "description": "spooky seasonal fun"
  },
  {
    "name": "doggie treat (box)",
    "price": 5.99,
    "description": "fido loves 'em"
  },
  {
    "name": "egg separator",
    "price": 3.99,
    "description": "it separates yolks from whites"
  },
  {
    "name": "LED lightbulb",
    "price": 6.55,
    "description": "It's super-efficient!"
  },
  {
    "name": "owl pellets",
    "price": 3.99,
    "description": "Don't ask what they used to be."
  },
  {
    "name": "flag",
    "price": 5.99,
    "description": "catches the breeze"
  },
  {
    "name": "hair brush",
    "price": 6.99,
    "description": "fine boar bristles"
  },
  {
    "name": "iridium (one gram)",
    "price": 19.36,
    "description": "corrosion-resistant metal"
  },
  {
    "name": "quark",
    "price": 0.01,
    "description": "Very small"
  },
  {
    "name": "turtleneck",
    "price": 19.99,
    "description": "available in black and slightly-darker black"
  },
  {
    "name": "kaleidoscope",
    "price": 8.25,
    "description": "tube with moving plastic pieces inside"
  },
  {
    "name": "mitt (leather)",
    "price": 15,
    "description": "regulation sized"
  },
  {
    "name": "nothing",
    "price": 10,
    "description": "Hey, if you pay us, we won't ask any questions."
  },
  {
    "name": "violin",
    "price": 2000,
    "description": "Talk about a JS fiddle..."
  },
  {
    "name": "yoyo",
    "price": 1,
    "description": "We had to pull some strings to get this one in."
  },
  {
    "name": "pincushion",
    "price": 1.99,
    "description": "You'll get 'stuck' on it"
  },
]

console.log(products);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      name: '',
      price: 0,
      description: '',
      isHiring: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
    };
    this.setState({
      products: [ ...this.state.products, newProduct ],
      name: '',
      price: 0,
      description: '',
    });
  }

  render() {
    return (
      <div>
        <h1>Big Time Shopping</h1>

        {
          this.state.isHiring ? <h2>Yes, we are hiring!</h2> : <h2>Sorry, check back tomorrow.</h2>
        }

        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={ this.state.name } onChange={ this.handleChange }/>
          <br/>
          <label htmlFor="price">Price: </label>
          <input type="number" id="price" value={ this.state.price } onChange={ this.handleChange }/>
          <br/>
          <label htmlFor="description">Description: </label>
          <input type="text" id="description" value={ this.state.description } onChange={ this.handleChange }/>
          <br/>
          <input type="submit" value="Add Product"/>
        </form>

        <div>
          <h2>Preview our new item</h2>
          <h4>Name: {this.state.name}</h4>
          <h4>Price: {this.state.price}</h4>
          <h4>Description: {this.state.description}</h4>
        </div>

        <ul>
          {
            this.state.products.map((product, i) => {
              return <li key={ i }>{ product.name } | ${ product.price } | { product.description }</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;
