import React, { Component } from "react";
import { Grid, Typography, Card, TextField, Button } from "@material-ui/core";

class SimpleTransferOwnerhip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item md={4}>
            <Card style={{ margin: "50px", padding: "25px" }}>
              <Typography variant="h4" style={{ color: "#303F9F" }}>
                Transfer of Ownership
              </Typography>
              <br />
              <Typography variant="body1">
                Enter the Address of the Institute to which you want to transfer
                your ownership.
              </Typography>
              <TextField
                id="standard-with-placeholder"
                label="Address*"
                placeholder="Enter Address"
                margin="normal"
                style={{ width: "250px" }}
              />{" "}
              <br />
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "25px" }}
              >
                Next
              </Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SimpleTransferOwnerhip;

//onclick of next render the below component in the card
/* 
<Sample/> download it from github Sample.jsx
*/
