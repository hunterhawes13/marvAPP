import React, {Component} from 'react';
import Comic from './Comic.jsx';



export default class Comics extends Component {
  render() {
    return (
      <div>
        {this.props.media.map(function(comic) {
          return (
            <div>

            <Comic title={comic.title} img={comic.thumbnail.path + '.' + comic.thumbnail.extension} />
            
            </div>
            )
        })}
      </div>
    )
  }
}

