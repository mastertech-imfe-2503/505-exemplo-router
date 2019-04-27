import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return <div>
      <p>HOME PAGE</p>
      <Link to="/about"><button>sobre</button></Link>
      <Link to="/subscribe"><button>SPAM</button></Link>
      </div>;
  }
}

export default Home;