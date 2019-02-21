import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Card, CardContent, Typography } from "@material-ui/core";

class LandingGrid extends React.Component {
  state = {
    school: "https://image.flaticon.com/icons/svg/1141/1141771.svg",
    student: "https://image.flaticon.com/icons/svg/167/167707.svg"
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid container item xs={12} justify="center">
            <h1>e-certify</h1>
            <Grid container item xs={12} justify="center">
              <br />
              <h2>Login</h2>
            </Grid>
            {/*Cards Begin */}
          </Grid>
          <Grid container item xs={6} justify="center">
            <Card style={{ height: "400px", width: "300px" }}>
              <CardContent>
                Student
                <Typography color="textSecondary">
                  Please Login to continue
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ position: "absolute", top: "55%", left: "23%" }}
                >
                  Login
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item xs={6} justify="center">
            <Card style={{ height: "400px", width: "300px" }}>
              <CardContent>
                Institute
                <Typography color="textSecondary">
                  Please Login to continue
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ position: "absolute", top: "55%", right: "23%" }}
                >
                  Login
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LandingGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default LandingGrid;
