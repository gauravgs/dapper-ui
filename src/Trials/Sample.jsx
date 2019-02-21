import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Sample extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>e-certify</h1>
        <Button>Hello Button!</Button>
        <br />
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" style={{ color: "#009688" }}>
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <span style={{ color: "#009688" }}>Hello Color Teal!!</span>
      </div>
    );
  }
}
export default Sample;
