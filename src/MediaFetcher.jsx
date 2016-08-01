import React, {Component} from 'react';
import md5 from "md5";
import Comics from './Comics.jsx'

function fetchJSON(url) {
  return fetch(url).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json();
    } else {
      console.log("Oops, we haven't got JSON!");
    }
  });
}

//calculates hash, calculates url, and then gets the json from the url
function marvelFactory(config) {
  return function(path) {
    var timestamp = new Date().getTime();
    var hash = md5(timestamp + config.privateKey + config.publicKey);
    var url = config.hostname + '/v' + config.version + '/public' + path + '?limit=100&apikey=' + config.publicKey + '&ts=' + timestamp + '&hash=' + hash;
    console.log(url);

    return fetchJSON(url);
  }
}

// Get an instance of the marvel api
var marvel = marvelFactory({
  hostname: 'http://gateway.marvel.com',
  publicKey: '2c75fc18d125009804c24d5d29c25268',
  privateKey: '9e72845868dd8d8a238b208cf4f03848db410744',
  version: '1'
});



export default class MediaFetcher extends Component {
  //constructor only gets executed once
    constructor(props) {  //allows you to set the initial state of the component
      super(props);
      this.state={
        media: []    //this is the initial state, needs to be empty at first
      }
      this.getOneMedia()
    }

    getOneMedia(){  //put it in a function so that it only gets called once

      marvel('/characters/1009266/comics').then((response) => {
        if (response && response.status === "Ok") {

          this.setState({media: response.data.results});
          ///media comes back with response data in an array
          console.log("Media ", this.state.media);
        } else if (response && response.Response === "False") {
          this.setState({media: "random number"});
        } else {
          console.error('Unknown error.');
        }
      });
    }
    //if the query changed, call getOneMedia
    // componentWillReceiveProps (nextProps){
    // if (this.props.charName !== nextProps.charName){
    //   this.getOneMedia(nextProps.charName);
    // }
    // }



  render() {
    return (
      <div>
      <Comics media={this.state.media} />

      </div>
    )}

  };
