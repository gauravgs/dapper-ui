import React, { Component } from "react";
import { Grid, Card, Typography } from "@material-ui/core";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ReqRunner from "./ReqRunner";

class RequestCard extends Component {
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
        <div>
          <Grid container>
            <Grid item md={3} />
            <Grid item md={6}>
              <Card
                style={{
                  padding: "5px",
                  marginTop: "5px"
                }}
              >
                <Typography variant="h4" style={{ margin: "10px" }}>
                  Requests
                </Typography>{" "}
                <hr />
                <div>
                  {this.state.current.map((current) => (
                    <ReqRunner
                      name={current.name}
                      address={current.address}
                      dateStamp={current.dateStamp}
                      key={current.name}
                      docs={current.docs}
                    />
                  ))}
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default RequestCard;
