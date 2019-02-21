import React, { Component } from "react";
import { Grid, Typography, Avatar, Card, Button } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExpPanel from "./ExpPanel";
import green from "@material-ui/core/colors/green";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MailIcon from "@material-ui/icons/Mail";
import AlertDialog from "./AlertDialog";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={5}>
            <Card
              style={{
                marginTop: "30px",
                marginLeft: "50px",
                marginRight: "50px"
              }}
            >
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ margin: "15px", backgroundColor: "#3F51B5" }}
                  >
                    <FolderIcon />
                  </Avatar>
                </Grid>
                <Grid item md={10}>
                  <Typography
                    variant="h4"
                    style={{
                      padding: "10px",
                      marginLeft: "15px",
                      color: "#3F51B5"
                    }}
                  >
                    My Documents
                    <Typography variant="caption" style={{ marginLeft: "5px" }}>
                      (Click on the Document name to view.)
                    </Typography>
                  </Typography>
                </Grid>{" "}
                {/* array map ExpPanel.jsx */}
                <ExpansionPanel style={{ width: "540px" }}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Avatar
                      style={{
                        color: "#fff",
                        backgroundColor: green[500]
                      }}
                    >
                      <AssignmentIcon />
                    </Avatar>
                    <Typography style={{ margin: "10px" }}>
                      Class X Marksheet
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container>
                      <Grid item md={10}>
                        <Typography>
                          <em>Class X marksheet</em> was uploaded on{" "}
                          <em>26/1/2015</em> by <em>CPSKR</em>. <br />
                          Uploader Address : <em>8855DDX84844</em>
                        </Typography>
                      </Grid>
                      <Grid item md={1}>
                        <Button
                          variant="outlined"
                          style={{ color: "green", marginLeft: "0px" }}
                        >
                          View
                        </Button>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                {/* array map the above content  */}
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item md={1} />
          <Grid item md={5}>
            <Card
              style={{
                marginTop: "30px",
                marginLeft: "50px",
                marginRight: "50px"
              }}
            >
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ margin: "15px", backgroundColor: "#E10050 " }}
                  >
                    <MailIcon />
                  </Avatar>
                </Grid>
                <Grid item md={10}>
                  <Typography
                    variant="h4"
                    style={{
                      padding: "10px",
                      marginLeft: "15px",
                      color: "#E10050"
                    }}
                  >
                    My Requests
                    <Typography variant="caption" style={{ marginLeft: "5px" }}>
                      (Click on the Request to view.)
                    </Typography>
                  </Typography>
                  <hr />
                </Grid>

                {/* array map ExpPanel.jsx */}
                <Grid container>
                  <Grid item md={2} style={{ marginLeft: "25px" }}>
                    <Avatar
                      style={{
                        color: "#fff",
                        backgroundColor: green[500]
                      }}
                    >
                      <MailIcon />
                    </Avatar>
                  </Grid>

                  <Grid item md={6}>
                    <Typography>
                      Request to view{" "}
                      <em style={{ color: "red" }}>Class X marksheet </em> was
                      sent on <em>26/1/2015</em> by <em>CPSKR</em>. <br />
                      Requester Address : <em>8855DDX84844</em>
                    </Typography>
                    <br />
                  </Grid>
                  <Grid item md={1} />
                  <Grid item md={1}>
                    <AlertDialog /> {/* array map the alert dialog  */}
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={5}>
            <Card
              style={{
                marginTop: "30px",
                marginLeft: "50px",
                marginRight: "50px"
              }}
            >
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ margin: "15px", backgroundColor: "#ff5722 " }}
                  >
                    <MailIcon />
                  </Avatar>
                </Grid>
                <Grid item md={10}>
                  <Typography
                    variant="h4"
                    style={{
                      padding: "10px",
                      marginLeft: "15px",
                      color: "#ff5722"
                    }}
                  >
                    Pending Approvals
                    <Typography variant="caption" style={{ marginLeft: "5px" }}>
                      (Click on the Request to view the uploaded data.)
                    </Typography>
                  </Typography>
                  <hr />
                </Grid>

                {/* array map ExpPanel.jsx */}
                <Grid container>
                  <Grid item md={2} style={{ marginLeft: "25px" }}>
                    <Avatar
                      style={{
                        color: "#fff",
                        backgroundColor: green[500]
                      }}
                    >
                      <MailIcon />
                    </Avatar>
                  </Grid>

                  <Grid item md={6}>
                    <Typography>
                      <em>RCOEM</em> has uploaded your <em>B.Tech Degree</em>{" "}
                      and want your approval.
                    </Typography>
                    <br />
                  </Grid>
                  <Grid item md={1} />
                  <Grid item md={1}>
                    <Button variant="outlined" color="primary">
                      View
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MyProfile;
