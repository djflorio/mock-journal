import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage__center">
          <h1 className="homepage__title">
            Mock Journal
          </h1>
          <Link to="/writing" className="homepage__btn">
            Start Writing
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;