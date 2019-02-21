import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Checkbox, Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class Popup extends React.Component {
  state = {
    open: false,
    message: "HEllo Popups!"
  };

  handleClickOpen = (scroll) => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  //   Build approve and dismiss logic

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen("body")}
        >
          View !
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Request</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Name : {this.props.name} <br />
              Address : {this.props.address} <br />
              Date : {this.props.dateStamp} <br />
              Documents : {this.props.docs}
            </DialogContentText>
            <FormControlLabel
              control={<Checkbox value="checkedA" />}
              label="I agree to share the above listed Documents."
              color="secondsary"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="primary">
              Deny
            </Button>
            <Button onClick={this.handleClose.bind(this)} color="primary">
              Allow
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Popup;
