import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from './HOC/Aux/Aux';
import Register from './container/Register/Register';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
         <Register />  
         <h1>TOVARASI</h1>
      </Layout>
    );
  }
}

export default App;
