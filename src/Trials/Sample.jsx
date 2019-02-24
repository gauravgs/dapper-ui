import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class Sample extends Component {
  constructor() {
    super();
  }
  state = {
    id: 1
  };

  renderMe() {
    this.setState({
      id: 0
    });
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={3}>
            <h1>e-certify</h1>
            <Button
              variant="outlined"
              color="secondary"
              onClick={this.renderMe.bind(this)}
            >
              Click
            </Button>
          </Grid>
          <Grid item md={6}>
            {this.state.id ? <div>hi</div> : <div />}
          </Grid>
          <Grid item md={3}>
            Hello
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Sample;
