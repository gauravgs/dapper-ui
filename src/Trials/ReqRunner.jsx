import React, { Component } from "react";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, Card, Typography } from "@material-ui/core";

class ReqRunner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={5}>
            <Typography variant="h6" style={{ padding: "10px" }}>
              {this.props.name}
            </Typography>
          </Grid>

          <Grid item md={2}>
            <Typography variant="subheading" style={{ padding: "10px" }}>
              {this.props.address}
            </Typography>
          </Grid>
          <Grid item md={1} />
          <Grid item md={2}>
            <Typography variant="subheading" style={{ padding: "10px" }}>
              {this.props.dateStamp}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Popup
              name={this.props.name}
              address={this.props.address}
              dateStamp={this.props.dateStamp}
              docs={this.props.docs}
            />
          </Grid>
        </Grid>
        <hr />
      </div>
    );
  }
}

export default ReqRunner;
