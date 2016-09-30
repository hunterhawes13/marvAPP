import React, {Component} from 'react';
import MediaFetcher2 from './MediaFetcher2.jsx';
import { Router, Route, Link, browserHistory,} from 'react-router';

/**
 * A stateful component to store our app
 */
export default class Mainq extends Component {
  render() {
    return (
      <div style={{
        backgroundImage: 'url("http://i.imgur.com/YSoSdiq.png"',
        backgroundColor: "#F11E22",
  padding: "0",
  margin: "0",
  top: "0",
  left: "0",
      }}>
        <MediaFetcher2 />
      </div>
    );
  }
}