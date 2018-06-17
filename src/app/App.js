import React, { Component, Fragment } from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.css"
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { FeedPage } from './pages/FeedPage';
import M from "materialize-css"
import { Switch, Route, Redirect } from 'react-router-dom';
import { PostPage } from './pages/PostPage';
import {PeoplePage} from "./pages/PeoplePage";

export class App extends Component {


  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/feed" component={FeedPage} />
          <Route path="/post/:type/:id" component={PostPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route exact path="/people" component={PeoplePage} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

