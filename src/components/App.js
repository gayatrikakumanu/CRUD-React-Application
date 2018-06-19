import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './home.js';
import TitleList from './titlelist.js';
import FormPage from './formpage.js';
import EditPage from './editpage.js';
import Navigation from './navigation.js'
import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid>
      <Navigation></Navigation>
      <Switch>
            <Route path='/home' component={ Home } />
            <Route path='/title' component={ TitleList } />
            <Route path='/add' component={ FormPage } />
            <Route path='/edit' component={ EditPage } />
        </Switch>
      </Container>
    );
  }
}

export default App;
