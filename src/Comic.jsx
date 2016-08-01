import React, {Component} from 'react';




export default class Comic extends Component {
  render() {     
    return (
      <div>
   <div> {this.props.title}</div>
<img src={this.props.img}/>
</div>

    )
  }
}