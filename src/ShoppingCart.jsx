import React, { Component } from 'react';
import Product from './Product'

export default class ShoppingCart extends Component {
  // Executes when the componenet is mounted
  constructor(props) {
    console.log('constructor - ShoppingCart');
    // super is a Component's class
    super(props);
    // Initialization of the state
    this.state = {
      products: []
    }
  }

  render() {
    console.log('render - ShoppingCart');
    return (
      <div>
        <h4 className="m-2">Shopping Cart</h4>

        <div className="row">
          {
            this.state.products.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                >
                  <button className="btn btn-primary">Buy Now</button>
                </Product>
              );
            })
          }
        </div>
      </div>
    );
  }
  // render ends here

  // Executes after constructor and render methods (incl. life cycle of child
  // components, if any) of current component
  componentDidMount = async() => {
    console.log('componentDidMount - ShoppingCart');
    // fetch data from source - by defalut its' get request, return JS promise

    // fetch("http://localhost:5000/products", {method: "GET"})
    // .then((response) => response.json())
    // .then((products) => {
    //   this.setState({products: products});
    // });

    let response = await fetch(
      "https://my-first-react-ecommerce-app.herokuapp.com/products",
      {method: "GET"}
    );
    let products = await response.json();
    this.setState({products: products});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.x !== this.props.x) {
      // make http call
      console.log(
      'ComponentDidUpdate - ShoppingCart',
      prevProps,
      prevState,
      this.props,
      this.state
    );
    }
  }

  // Executes when the current component is being deleted from memory
  componentWillUnmount() {
    console.log('componentWillUnmount - ShoppingCart');
  }

  // componentDidCatch(error, info) {
  //   console.log('componentDidCatch - ShoppingCart');
  //   console.log(error, info);
  //   localStorage.localError = `${error}\n${JSON.stringify(info)}`;
  // }

  // Executes when the user clicks on +button
  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({products: allProducts});
    }
  }

  // Executes when the user clicks on -button
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({products: allProducts});
    }
  }

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm('Are you sure to delete?')) {
      allProducts.splice(index, 1);
      this.setState({products: allProducts});
    }
  }
}
