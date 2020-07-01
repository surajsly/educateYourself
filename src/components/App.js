import React from "react";
import "./app.module.css";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import coursera from "./api/coursera";
import CardList from "./CardList";
import Header from "./Header";
import About from "./About";

class App extends React.Component {
  state = { cc: [] };

  onSearchSubmit = async (term) => {
    const response = await coursera(term);
    this.setState({ cc: response });
    console.log(this.state.cc);
  };
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container-fluid">
          <Header />
          <SearchBar onSubmit={this.onSearchSubmit} />
          <CardList cc={this.state.cc} />
          <About />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
