import React, { Component } from 'react';

export default class Product extends Component {

  constructor(props) {
    super(props);
    console.log('constructor - Product');
    this.state = { product: this.props.product };
  }


  render() {
    // console.log(this.props);
    console.log('render - Product');
    return (
        <div className="col-lg-6">
          <div className="card m-2">
            <div className="card-body">
              <div className="text-muted">
                # {this.state.product.id}
                <span className="pull-right hand-icon" onClick={() => {this.props.onDelete(this.state.product)}}>
                  <i className="fa fa-times"></i>
                </span>

              </div>
              <h5 className="pt-2 border-top">{this.state.product.productName}</h5>
              <div>${this.state.product.price}</div>
            </div>
            {/* card-body ends here */}

            <div className="card-footer">
              <div className="pull-left">
                <span className="badge text-dark">{this.state.product.quantity}</span>
                <div className="btn-group mb-2">
                  <button className="btn btn-outline-success"
                          onClick={() => {this.props.onIncrement(this.state.product, 10);}}>
                          +
                  </button>
                  <button className="btn btn-outline-success"
                          onClick={() => {this.props.onDecrement(this.state.product, 0)}}>
                          -
                  </button>
                </div>
              </div>
              {/* float-left ends here */}

              <div className="pull-right">{this.props.children}</div>
            </div>
            {/* card-footer ends here */}

          </div>
          {/* card ends here */}
        </div>
    )
  }

  componentDidMount() {
    console.log('componentDidMount - Product');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate - Product');
  }

  // Executes when the current component is being deleted from memory
  componentWillUnmount() {
    console.log('componentWillUnmount - Product');
  }
}
