import React, { Component } from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Button, ButtonBase } from "@material-ui/core";
import FullScreenDialog from "./FullScreenDialog";

class DrawerRHS extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    a: "not ok"
  };
  act() {
    this.setState({
      a: "ok"
    });
  }
  render() {
    return (
      <div>
        <Drawer variant="permanent" anchor="right" style={{ width: "660px" }}>
          <div />
          <Typography variant="h4" color="primary" style={{ margin: "10px" }}>
            Linked Accounts
          </Typography>
          <Divider />
          <List>
            {/* use array map here */}
            {["Tom Cruise", "Tony Stark", "Thor Odinson"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
                <FullScreenDialog
                  name="Tom Cruise"
                  address={`Address : ${this.props.address}`}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default DrawerRHS;
