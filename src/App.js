import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkList from "./components/LinkList";
import CreateLink from "./components/CreateLink";

class App extends Component {
  render() {
    return (
      <div>
        <LinkList />
        <CreateLink />
      </div>
    );
  }
}

export default App;
