import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaFetcher2 from './MediaFetcher2.jsx';
import { Router, Route, Link, browserHistory,} from 'react-router';
import Welcome from './Welcome.jsx';

/**
 * A stateful component to store our app
 */
class MainSQ extends Component {
  render() {
    return (
      <div>
        <MediaFetcher2 />
      </div>
    );
  }
}