import React, { Component } from 'react';

import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';

class App extends Component {
  render() {
    const gifs = [
      { id: "l3Ucp0B8aX3dHbjvW/giphy.gif?cid=790b76117057f1b8592921c26aff3070d8268e9dd0d3dc45&rid=giphy.gif&ct=g" },
      { id: "Phzg1XZgJTeZG/giphy.gif?cid=ecf05e476a67a3dcadcf6100d78467b611696e7c5c26d6e1&rid=giphy.gif&ct=g" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="oKQGM5S2mwx5C/giphy.webp?cid=ecf05e47prue3bcjers7a8bhrynf3send0df6zr196bfwsaw&rid=giphy.webp&ct=g" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
