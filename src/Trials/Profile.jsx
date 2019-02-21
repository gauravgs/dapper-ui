import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <Paper
        style={{
          padding: "15px",
          marginRight: "15px",
          marginLeft: "15px",
          marginTop: "20px",
          marginBottom: "20px",
          height: "90vh",
          width: "35%"
        }}
      >
        <Grid container direction="column" spacing={16}>
          <Grid item>
            <ButtonBase>
              <Avatar
                alt="Student Image"
                src={props.src}
                style={{
                  marginTop: "2%",
                  marginBottom: "10%",
                  marginLeft: "1.5%",
                  width: "85%",
                  height: "85%"
                }}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <h4>
                  Name:
                  <br />
                  {props.name}
                </h4>

                <Typography
                  variant="Headline"
                  style={{
                    marginTop: "2.5%",
                    marginBottom: "1%"
                  }}
                >
                  Address:
                  <br />
                  {props.address}
                </Typography>
                <Typography
                  variant="Headline"
                  style={{
                    marginTop: "2.5%",
                    marginBottom: "1%"
                  }}
                >
                  Institute:
                  <br />
                  {props.institute}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Profile;
