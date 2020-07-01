import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    console.log(this.state.term);
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form
        id="#searchId"
        onSubmit={this.onFormSubmit}
        className="alert alert-light"
      >
        <div className="field alert-light">
          <label className="alert-light">Search For Course</label>
          <input
            className="form-control form-control-lg"
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            placeholder="Search Here..."
          ></input>
        </div>
      </form>
    );
  }
}

export default SearchBar;
