import React from 'react';

import Data from '../data';
import { Route, Switch } from 'react-router';

import Home from './Home';
import Help from './Help';
import SingleArticle from './SingleArticle';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var articleData = Data.map((article) => {
      return article;
    });
    return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/articles" exact>
          <Main />
        </Route>

        <Route path="/help" exact>
          <Help />
        </Route>

        <Route
          path="/article/:slug"
          component={SingleArticle}
          data={articleData}
        />
      </Switch>
    );
  }
}

export default Main;
