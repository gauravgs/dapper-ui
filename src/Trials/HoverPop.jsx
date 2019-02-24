import React from "react";
import PropTypes from "prop-types";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing.unit
  }
});

class HoverPop extends React.Component {
  state = {
    anchorE2: null
  };

  handlePopoverOpen = (event) => {
    this.setState({ anchorE2: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorE2: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorE2 } = this.state;
    const open = Boolean(anchorE2);

    return (
      <div>
        <Button
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={this.handlePopoverOpen}
          onMouseLeave={this.handlePopoverClose}
        >
          Hover with a Popover.
        </Button>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper
          }}
          open={open}
          anchorE2={anchorE2}
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
      </div>
    );
  }
}

HoverPop.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HoverPop);
