import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Subscribe from '../Subscribe/Subscribe';

class App extends React.Component {
  render() {
    return (<BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/subscribe" exact component={Subscribe}/>
    </BrowserRouter>);
  }
}

export default App;
