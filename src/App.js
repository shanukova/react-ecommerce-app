import React, { Component } from "react";
import { Routes, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Dashboard from "./Dashboard";
import ShoppingCart from "./ShoppingCart";
import CustomersList from './CustomersList';
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/cart" exact element={<ShoppingCart />} />
            <Route path="/customers" exact element={<CustomersList />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}
