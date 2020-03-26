import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import DetailsContainer from './features/details/DetailsContainer';
import Header from './common/header/Header';
import HomeContainer from './features/home/HomeContainer';

import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Container fixed>
            <Header />
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/details/:id" component={DetailsContainer} />
              <Redirect to="/" />
            </Switch>
          </Container>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
