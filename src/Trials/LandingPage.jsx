import React, { Component } from "react";
import Particles from "react-particles-js";
import { Typography } from "@material-ui/core";

const particleOpt = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class LandingPage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#2196f3" }}>
        <Typography
          variant="h1"
          style={{
            marginTop: "300px",
            marginLeft: "572px",
            position: "absolute",
            color: "#01579b"
          }}
        >
          e-Certify
        </Typography>
        <Particles params={particleOpt} />
      </div>
    );
  }
}

export default LandingPage;
