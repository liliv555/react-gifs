import React, { Component } from "react";

class Gif extends Component {
  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}`;
    return (
      <img className="gif" src={src} alt="" />
    );
  }
}

export default Gif;
