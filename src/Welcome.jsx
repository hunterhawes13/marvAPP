
import React, { Component } from 'react';

var pageTitleStyle = {
  backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1280px-MarvelLogo.svg.png")',
  backgroundRepeat: "no-repeat",
  position: "fixed",
  padding: "0",
  margin: "0",
  top: "0",
  left: "0",
  display: "block",
  textAlign: "center",
  maxWidth: "100%",
maxHeight: "100%",
  width: "100%",
  height: "100%",
  backgroundColor: "#F11E22"
}


export default class Welcome extends Component {
  render() {
    return (
      <div style={pageTitleStyle}><a href="sq">
<img src="http://i.imgur.com/zHRUB27.pnglocal" /></a>
<a href="main">
<img src="http://i.imgur.com/CBAQHqH.png" /></a>
      </div>
    );
  }
}