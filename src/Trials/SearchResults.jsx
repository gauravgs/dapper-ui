import React, { Component } from "react";
import { Grid, Card, Typography, GridList } from "@material-ui/core";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TopNav from "./TopNav";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [
        {
          name: "Saksham Madan",
          address: "0xEa52640",
          dateStamp: "cejyvuv",
          docs: "hello 1"
        },
        {
          name: "jyecfksham Madan",
          address: "0xEa526408",
          dateStamp: "cejyvjgc",
          docs: "hello 2"
        },
        {
          name: "ekjb Madan",
          address: "0xEa52640ieugdgxuyceuy",
          dateStamp: "cefdjyvuv",
          docs: "hello 3"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={12}>
            <TopNav />
          </Grid>
        </Grid>
        <div>
          <div>
            <Grid container>
              <Grid item md={3} />
              <Grid item md={6}>
                <Card
                  style={{
                    padding: "5px",
                    marginTop: "25px"
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ padding: "10px", color: "#311b92" }}
                  >
                    Search Results
                  </Typography>{" "}
                  <hr />
                  {/* array map search results */}
                  <div>
                    <ExpansionPanel>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Grid container>
                          <Grid item md={3}>
                            <Typography variant="h6">Tony Stark</Typography>
                          </Grid>
                          <Typography
                            variant="overline"
                            style={{ marginTop: "0%" }}
                          >
                            Address : 88556XXF64456
                          </Typography>
                        </Grid>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container>
                          <Grid item md={11}>
                            <Typography>Some info........</Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Button
                              variant="outlined"
                              style={{ color: "#ff5722" }}
                            >
                              View
                            </Button>
                          </Grid>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>
                  {/* array map search results */}
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
