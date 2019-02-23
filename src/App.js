import React, { Component } from "react";
import ClippedDrawer from "./Trials/ClippedDrawer";
import DashboardC from "./Trials/DashboardC";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        {/* <ClippedDrawer /> */}
        <DashboardC />
      </div>
    );
  }
}

export default App;
