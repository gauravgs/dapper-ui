import React, { Component } from "react";
import { Grid, Card, Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ppl: [
        {
          add: 1,
          name: "tom cruise",
          pic:
            "data:image/jpeg;base64,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"
        },
        { add: 2, name: "brad pitt", pic: "" }
      ],
      current: { add: null, name: "No Results Found", pic: "" },
      query: {
        add: 880000145,
        name: "Tom Cruise",
        pic:
          "data:image/jpeg;base64,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"
      },
      sample: {
        add: "null",
        name: "null",
        pic: ""
      }
    };
  }
  change() {
    this.setState({ current: this.state.query });
  }

  View() {
    this.setState({
      sample: this.state.current
    });
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={"6"}>
            <Card
              style={{
                padding: "15px",
                marginRight: "15px",
                marginLeft: "15px",
                marginTop: "20px",
                marginBottom: "30px"
              }}
            >
              <Grid container>
                <h2>Search for Documents </h2>

                <br />
                <Grid container>
                  <Grid item md={3}>
                    <TextField
                      id="SearchBox"
                      label="Search"
                      placeholder="Search"
                      margin="normal"
                    />
                  </Grid>

                  <Grid item md={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ position: "unset", marginTop: "35px" }}
                      onClick={this.change.bind(this)}
                    >
                      Go!
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <div>
                <hr />
              </div>
              <div>
                <div>
                  <Grid container>
                    <Grid item md={2}>
                      {" "}
                      <Avatar
                        alt="Tom Cruise"
                        src={this.state.current.pic}
                      />{" "}
                    </Grid>
                    <Grid item md={6}>
                      Name : {this.state.current.name} <br />
                      Address : {this.state.current.add}
                    </Grid>
                    <Grid item md={4}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.View.bind(this)}
                      >
                        View
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item md={"6"}>
            <Card
              style={{
                padding: "15px",
                marginRight: "15px",
                marginLeft: "15px",
                marginTop: "20px",
                marginBottom: "30px"
              }}
            >
              <h3 style={{ padding: "15px", textAlign: "center" }}>Profile</h3>
              <img
                src={this.state.sample.pic}
                alt=""
                style={{ height: "300px", width: "300px" }}
              />
              <br />
              <hr />
              <Grid container>
                <Grid item md={4}>
                  <Typography>
                    <b>Name</b> : {this.state.sample.name} <br />
                    <b>Address </b> : {this.state.sample.add}
                  </Typography>
                </Grid>
              </Grid>
              <hr />
              <h4>
                <b>Documents List</b>
              </h4>
              <Grid container>
                <Grid item md={6}>
                  <Checkbox
                    // checked={this.state.checkedB}
                    // onChange={this.handleChange("checkedB")}
                    value="checkedB"
                    color="primary"
                  />
                  Adhar Card
                </Grid>
                <Grid item md={6}>
                  <Checkbox
                    // checked={this.state.checkedB}
                    // onChange={this.handleChange("checkedB")}
                    value="checkedB"
                    color="primary"
                  />
                  Class X Marksheet
                </Grid>
                <Grid item md={6}>
                  <Checkbox
                    // checked={this.state.checkedB}
                    // onChange={this.handleChange("checkedB")}
                    value="checkedB"
                    color="primary"
                  />
                  Class XII Marksheet
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Search;
