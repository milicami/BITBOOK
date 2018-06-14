import React, { Component, Fragment } from 'react';
import './App.css';

import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { FeedPage } from './pages/FeedPage';


export class App extends Component {

  
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

