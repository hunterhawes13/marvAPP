import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaFetcher from './MediaFetcher.jsx';
import { Router, Route, Link, browserHistory,} from 'react-router';
import Welcome from './Welcome.jsx';
/**
 * A stateful component to store our app
 */
class App extends Component {
  render() {
    return (
      <div>
        <MediaFetcher />
      </div>
    );
  }
}

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Welcome}/>
      <Route path="main" component={App}/>      
    </Router>,
    document.getElementById('root')
  );