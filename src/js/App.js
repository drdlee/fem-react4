import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleClick() {
    alert("You Clicked the title");
  }
  render() {
    return React.createElement("div", { onClick: this.handleClick }, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Jiggly",
        animal: "bird",
        breed: "Kakaktua"
      }),
      React.createElement(Pet, {
        name: "Leon",
        animal: "cat",
        breed: "Lion"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
