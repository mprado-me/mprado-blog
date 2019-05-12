import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostsLayout from './layouts/PostsLayout';
import PostLayout from './layouts/PostLayout';
import TagsLayout from './layouts/TagsLayout';
import NotFoundLayout from './layouts/NotFoundLayout';
import history from './history';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
    <div>
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={PostsLayout} />
                <Route path="/posts" exact component={PostsLayout} />
                <Route path="/posts/:id" exact component={PostLayout} />
                <Route path="/tags" exact component={TagsLayout} />
                <Route path="*" component={NotFoundLayout} />
            </Switch>
        </Router>
    </div>
    );
  }
}

export default App;
