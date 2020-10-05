import React, { Component } from 'react';

class App extends Component {
  state = {
    products: []
  };


  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/product/'); // fetching the data from api, before the page loaded
      const products = await res.json();
      this.setState({
        products
      });
      console.log("product",this.state.products)
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.products.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;