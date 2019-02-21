import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";

class CreateMultiSigStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tnc: false
    };
  }

  created = () => {
    {
      if (this.state.tnc) alert("Successfully Created!");
      else alert("Please Accept T & C to continue!");
    }
  };

  handleChange = (name) => (event) => {
    this.setState({ tnc: true });
  };

  render() {
    return (
      <div style={{ paddingTop: "50px" }}>
        <Grid container>
          <Grid item md={3} />
          <Grid item md={6}>
            <Card>
              <h1 style={{ padding: "25px" }}>Create New MultiSig Wallet!</h1>
              <hr style={{}} />
              <Grid container>
                <Grid item md={3} />
                <Grid item md={4}>
                  <h5 style={{ padding: "25px" }}>Enter Student Address:</h5>
                </Grid>
                <Grid item md={3}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    //   defaultValue="Hello World"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={3} />
                <Grid item md={4}>
                  <h5 style={{ padding: "25px" }}>Your Address:</h5>
                </Grid>
                <Grid item md={3}>
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Your Address"
                    defaultValue="11002255488484"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Checkbox
                checked={this.state.checkedB}
                onChange={this.handleChange("checkedB")}
                value="checkedB"
                color="primary"
              />
              I have read and Agree to All the{" "}
              <a href="https://metamask.io/"> Terms And Conditions</a>.
              <Grid container>
                <Grid item md={5} />
                <Grid item md={2}>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ position: "unset", marginBottom: "15px" }}
                    onClick={this.created.bind(this)}
                  >
                    Go!
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CreateMultiSigStudent;
