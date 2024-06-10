import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = () =>
    axios
      .get("https://api.tronalddump.io/random/quote")
      .then((response) => {
        setQuote(response.data.value);
      }) // .then() block to handle the response from the GET request. .value to extract the value property of the data object
      .catch((error) => {
        console.log(error);
      });

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="intro">Dumbest tweets Donald Trump has ever made.</h1>
        <h2 className="heading">{quote}</h2>
        <button className="button" onClick={fetchQuote}>
          <span>MAKE AMERICA GREAT AGAIN!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
