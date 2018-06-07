import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/Home';
import WritingPage from './pages/writing/Writing';

import Notifications from './parts/notifications/NotificationsContainer';

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Notifications />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/writing' component={WritingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
