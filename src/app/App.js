import React, { Component, Fragment } from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.css"
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { FeedPage } from './pages/FeedPage';
import M from "materialize-css"


export class App extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <FeedPage />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

