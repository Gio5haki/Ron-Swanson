import React, { useEffect, useState } from "react";
import Quote from "./Quote";
import "./styles.css";

//Fetch data from the API -- OK
//Display it on my screen -- OK
//Set an interval for the data to be refetched -- OK
//I need to create a component, that takes in that data as a param -- OK
//Creating a button to manually reset the fetch

/*
  setInterval method
  setInterval(function, timer)
*/

function App() {
  // Creation of a state variable for quote
  const [quote, setQuote] = useState("");

  // Encapsulation of the fetch logic inside a named function
  const fetchData = () => {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      //    param    body
      .then(res => res.json())
      .then(finalResult => setQuote(finalResult[0]))
      .catch(e => console.log(e));
  };

  useEffect(() => {
    // We call the fetchData once, to get some default value
    fetchData();
    // We set an interval of 30secs(30000 milliseconds) for the next call
    setInterval(fetchData, 30000);
    // , [] is added at the end, so that useEffect is only called ONCE
  }, []);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <Quote myOnClick={fetchData} quoteProperty={quote} />
    </div>
  );
}

export default App;
