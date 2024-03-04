import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = { advice: " " };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    // No need const as it is a function inside a class, which makes it a method that belongs to the class
    axios
      .get("https://api.tronalddump.io/random/quote")
      .then((response) => {
        const { value } = response.data; // This line extracts the value property from the response data object. The response data is assumed to be in JSON format, and it seems to contain the value property.
        this.setState({ advice: value }); // Sets the value of the 'advice' property in the component's state to the value of the 'value' property received from the API response
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchQuote}>
            <span>MAKE AMERICA GREAT AGAIN!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
