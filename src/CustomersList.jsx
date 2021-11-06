import React, { Component} from 'react';

export default class CustomersList extends Component {

  state = {
    pageTitle: 'Customers',
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: 'Scott',
        phone: '123-456',
        address: {city: 'Elista'},
        photo: 'https://picsum.photos/id/1010/60'
      },
      {
        id: 2,
        name: 'Victoria',
        phone: '789-101',
        address: {city: 'London'},
        photo: 'https://picsum.photos/id/1011/60'
      },
      {
        id: 3,
        name: 'Jamie',
        phone: '121-314',
        address: {city: 'Stockholm'},
        photo: 'https://picsum.photos/id/1012/60'
      },
      {
        id: 4,
        name: 'Timofey',
        phone: null,
        address: {city: 'New York'},
        photo: 'https://picsum.photos/id/1013/60'
      },
      {
        id: 5,
        name: 'Sophie',
        phone: null,
        address: {city: 'Edinburgh'},
        photo: 'https://picsum.photos/id/1014/60'}
    ]
  };

  render() {
    return(
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2 text-primary">{this.state.customersCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.getCustomerRow()}
          </tbody>

        </table>
      </div>
    )
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7
    });
  }

  getPhoneToRender = (phone) => {
    if (phone) {
      return phone
    } else {
      return <div className="bg-warning p-2 text-center">No phone</div>;
    };
  }

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="customer pic"></img>
            <div>
              <button className="btn btn-sm btn-secondary" onClick={() => {this.onChangePicClick(cust, index)}}>Change Picture</button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  onChangePicClick = (cust, index) => {
    let customersArr = this.state.customers;
    customersArr[index].photo = 'https://picsum.photos/id/104/60';
    this.setState({
      customers: customersArr
    });
  }
}
