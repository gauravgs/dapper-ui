import React, { Component } from "react";
import ClippedDrawer from "./Trials/ClippedDrawer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <ClippedDrawer />
      </div>
    );
  }
}

export default App;
