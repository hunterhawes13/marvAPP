import React, {Component} from 'react';




export default class Comic extends Component {
  render() {     
    return (
      <div style={{
      	  
  display:"inline-block",
  margin: "0 auto",
  	minWidth: "300px",
  	minHeight: "300px",
    maxWidth: "300px",
    maxHeight: "300px",
    position: "relative",

  paddingLeft: "10%",
  paddingTop: "10%",
  paddingBottom: "10%",
  paddingRight: "10%",

}}>
   <div style={{
  display:"block",
  fontSize: "28px",
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "400",
  lineHeight: "20px",
      position: "absolute",
      marginTop: "200px",
          textShadow: "1.5px 2.2px black",
      color: "hotpink",
      width: "300px",
 }}> {this.props.title}</div>
<img src={this.props.img}/>
</div>

    )
  }
}