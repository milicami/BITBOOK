import React, { Component, Fragment } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { FeedPage } from './pages/FeedPage';
import { PostPage } from './pages/PostPage';


export class App extends Component {


  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/feed" component={FeedPage} />
          <Route path="/post/:type/:id" component={PostPage} />
          <Route path="/post/:id" component={PostPage} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

