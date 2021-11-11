import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.id);
  };

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      // add onClick function here, handle the click, change the state of App
    // I will need a  function passed to the children
      <img
        className="gif"
        src={src}
        alt=""
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
