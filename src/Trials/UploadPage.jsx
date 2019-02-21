import React, { Component } from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";

class UploadPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={3} />
          <Grid item md={6}>
            <Card style={{ margin: "25px" }}>
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ margin: "15px", backgroundColor: "#3F51B5" }}
                  >
                    <FolderIcon />
                  </Avatar>
                </Grid>
                <Typography
                  variant="h4"
                  color="primary"
                  style={{ margin: "15px" }}
                >
                  Upload Your Documents
                </Typography>
              </Grid>
              <hr />
              {/* array map from here */}
              <Grid container>
                <Grid item md={1} />
                <Grid item md={8}>
                  <List>
                    <ListItem>
                      <ListItemText>Class X Marksheet</ListItemText>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item md={1}>
                  <Button style={{ marginTop: "20px" }}>View</Button>
                </Grid>
                <Grid item md={1}>
                  <Button style={{ marginTop: "20px" }}>Upload</Button>
                </Grid>
              </Grid>
              <hr />
              {/* array map till here */}
              {/* array map from here */}
              <Grid container>
                <Grid item md={1} />
                <Grid item md={8}>
                  <List>
                    <ListItem>
                      <ListItemText>Class X Marksheet</ListItemText>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item md={1}>
                  <Button style={{ marginTop: "20px" }}>View</Button>
                </Grid>
                <Grid item md={1}>
                  <Button style={{ marginTop: "20px" }}>Upload</Button>
                </Grid>
              </Grid>
              <hr />
              {/* array map till here */}
              {/* array map from here */}
              <Grid container>
                <Grid item md={1} />
                <Grid item md={8}>
                  <List>
                    <ListItem>
                      <ListItemText>Class X Marksheet</ListItemText>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item md={1}>
                  <Button style={{ marginTop: "20px" }}>View</Button>
                </Grid>
                <Grid item md={1}>
                  <Button style={{ marginTop: "20px" }}>Upload</Button>
                </Grid>
              </Grid>
              <hr />
              {/* array map till here */}
              {/* array map from here */}
              <Grid container>
                <Grid item md={1} />
                <Grid item md={8}>
                  <List>
                    <ListItem>
                      <ListItemText>Class X Marksheet</ListItemText>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item md={1}>
                  <Button style={{ marginTop: "20px" }}>View</Button>
                </Grid>
                <Grid item md={1}>
                  <Button style={{ marginTop: "20px" }}>Upload</Button>
                </Grid>
              </Grid>
              <hr />
              {/* array map till here */}
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default UploadPage;
