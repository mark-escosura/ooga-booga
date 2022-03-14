import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
        type='search'
        className={className}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    );
  }
}

export default SearchBox;
