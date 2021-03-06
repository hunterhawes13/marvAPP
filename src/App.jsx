import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaFetcher from './MediaFetcher.jsx';
import { Router, Route, Link, browserHistory,} from 'react-router';
import Welcome from './Welcome.jsx';
import MediaFetcher2 from './MediaFetcher2.jsx';
import Mainq from './Main2.jsx'; 

/**
 * A stateful component to store our app
 */
class App extends Component {
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
        <MediaFetcher />
      </div>
    );
  }
}

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Welcome}/>
        <Route path="main" component={App}/> 
          <Route path="sq" component={Mainq}/> 
    </Router>,
    document.getElementById('root')
  );