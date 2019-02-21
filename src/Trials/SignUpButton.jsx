import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography, Grid } from "@material-ui/core";

export default class SignUpButton extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Sign Up!
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography style={{ color: "#1a237e" }} variant="h4">
              Create New Account
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Enter your Name</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
            <br />
            <DialogContentText style={{ marginTop: "15px" }}>
              Upload a picture
            </DialogContentText>
            <Grid container justify="center">
              <img
                src="https://99designs-blog.imgix.net/wp-content/uploads/2016/11/CNN.png?auto=format&q=60&fit=max&w=930"
                alt="CNN"
                style={{ margin: "20px", height: "250px", width: "250px" }}
              />
            </Grid>
            <Button>Browse </Button>
            <Button>Upload </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
