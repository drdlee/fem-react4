import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleClick() {
    alert("You Clicked the title");
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Lusi" animal="dog" breed="Havanese" />
        <Pet name="Jinbe" animal="fish" breed="Shark" />
        <Pet name="Luffy" animal="monkey" breed="Chimp" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
