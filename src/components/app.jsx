import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';

// const GIPHY_API_KEY = 'IRyS7ytLcwwI8CSqiVVSmzOoQWV7RCIr';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "oKQGM5S2mwx5C/giphy.webp?cid=ecf05e47prue3bcjers7a8bhrynf3send0df6zr196bfwsaw&rid=giphy.webp&ct=g"
    };
    // this.search("cat");
  }

  // search(query) {
  //   const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
  //   fetch(giphEndpoint).then(response => response.json()).then((data) => {
  //     const gifs = data.data.map(giph => giph.id)
  //     this.setState({
  //       gifs: gifs
  //     });
  //   });
  // }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    giphy('IRyS7ytLcwwI8CSqiVVSmzOoQWV7RCIr').search({
      q: query,
      rating: "g",
      limit: 15,
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  };


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
