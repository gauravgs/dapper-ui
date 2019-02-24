import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ArrowBackSharp from "@material-ui/icons/ArrowBackSharp";
import SettingsPower from "@material-ui/icons/SettingsPower";
import Popover from "@material-ui/core/Popover";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ViewProfile extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    anchorEl: null
    //hover anchor
  };
  handlePopoverOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChange = (event) => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <ArrowBackSharp />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Settings
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.confirmOut}
                  color="inherit"
                >
                  <SettingsPower
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={this.handlePopoverOpen}
                    onMouseLeave={this.handlePopoverClose}
                  />
                </IconButton>
                <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  classes={{
                    paper: classes.paper
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  onClose={this.handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography>I use Popover.</Typography>
                </Popover>
                {/* <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Log Out</MenuItem>
                </Menu> */}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ViewProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ViewProfile);
