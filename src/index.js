import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import App from './App';
import Header from './components/header';
import About from './components';
import Works from './components/works';
import BlogIndex from './components/blog/';
import New from './components/blog/new';
import Show from './components/blog/show';

import "./styles.css";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/blog" component={BlogIndex} />
          <Route path="/new" component={New} />
          <Route path="/show/:id" component={Show} />
          <Route path="/works" component={Works} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
