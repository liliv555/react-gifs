import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  };

  focus = () => {
    this.setState({ focused: true });
  }

  render() {
    return (
      <div>
        <i className="fas fa-search" />
        <input
          focused={this.state.focused}
          type="text"
          className="form-control form-search"
          onFocus={this.focus}
          onChange={this.handleUpdate}
        />
      </div>
    );
  }
}

export default SearchBar;
