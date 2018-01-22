import React from 'react';
import './Search.css';
import FaSearch from 'react-icons/lib/fa/search';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: 'Search',
      searchURL: 'https://www.google.ch/search?q='
    }

  }

  handleFocus = () => {
    let inputValue = {...this.state.inputValue};
    inputValue = "";
    this.setState({inputValue});
  }

  handleBlur = () => {
    let inputValue = {...this.state.inputValue};
    inputValue = "Search";
    this.setState({inputValue});
  }

  handleChange = (e) => {
    let inputValue = {...this.state.inputValue};
    inputValue = e.target.value;
    let searchURL = this.state.searchURL;
    searchURL = 'https://www.google.ch/search?q=' + inputValue;
    this.setState({inputValue, searchURL});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    window.open(this.state.searchURL, '_blank')
    console.log(this.state.searchURL);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action={this.state.searchURL} target="_blank" className="search-wrapper">
          <label htmlFor=""><button><FaSearch className="FaSearch"/></button></label>
          <input type="text" value={this.state.inputValue} onFocus={this.handleFocus} onChange={(e) => this.handleChange(e)} onBlur={this.handleBlur}/>
        </form>
      </div>
    );
  }
}

export default Search;
