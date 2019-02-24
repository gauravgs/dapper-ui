import React, { Component } from "react";
import {
  Grid,
  Card,
  Typography,
  Avatar,
  Button,
  ListItemAvatar,
  Drawer
} from "@material-ui/core";
import {
  Route,
  Link,
  Switch,
  BrowserRouter,
  Wrapper,
  PageWrap
} from "react-router-dom";
import ListDividers from "../CommonComponents/ListDivider";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FullScreenDialog from "../CommonComponents/FulScreenDialog";
import TopNav from "./TopNav";
import FolderIcon from "@material-ui/icons/Folder";
import MailIcon from "@material-ui/icons/Mail";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MyDocuments from "./MyDocuments";
import MyRequest from "./MyRequest";
import RoutesDashBoard from "../Routes/RoutesDashBoard";
import MyRequestInst from "../Institute/MyRequestInst";

class StudentDashBoard extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false
    // profilepic: "",
    // name: "",
    // owner1: "",
    // owner2: "",
    // aadhar: ""
  };
  // profile = async () => {
  //   const { accounts, contract } = this.props;
  //   const response = await contract.methods.getOwners(accounts[0]).call();

  //   this.setState({ owner1: response[0] });
  //   this.setState({ owner2: response[1] });
  //   // console.log("owner:Institute:" + response[1]);
  //   // console.log("owner:Student:" + response[0]);
  //   const response1 = await contract.methods.getProfile(accounts[0]).call();
  //   this.setState({ name: response1[0] });
  //   this.setState({ profilepic: response1[1] });
  //   const response3 = await contract.methods.getAadhar().call();
  //   this.setState({ aadhar: response3 });
  //   console.log(response3);
  //   // const response2 = await contract.methods
  //   //   .getUploadReqList(accounts[0])
  //   //   .call();

  //   // this.setState({ lis: response2 });

  //   // const response3 = await contract.methods.getAadhar().call();

  //   // this.setState({ aadhar: response3 });

  //   // console.log("aa", response3);
  // };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // showDocs() {
  //   return <div>logic</div>;
  // }
  // componentDidMount = async () => {
  //   await this.profile();
  // };
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Grid container>
              <Grid item md={12}>
                <TopNav />
              </Grid>

              <Grid
                item
                md={3}
                // style={{
                //   padding: "15px",

                // }}
              >
                <Card style={{ width: "300px", height: "655px" }}>
                  <Grid item md={12}>
                    <Grid container>
                      <Typography
                        variant="h4"
                        style={{ padding: "20px", color: "#3F51B5" }}
                      >
                        My Profile
                        <br />
                      </Typography>
                      <br />
                      <Grid container>
                        <Grid item md={1} />
                        <Grid item md={12}>
                          <Avatar
                            style={{
                              width: 80,
                              height: 80,
                              marginLeft: "33.33%"
                            }}
                            src={`https://gateway.ipfs.io/ipfs/${
                              this.state.profilepic
                            }`}
                          />
                          <br />
                        </Grid>
                        <Grid item md={2} />
                        <Grid item md={8}>
                          <Typography
                            variant="h5"
                            style={{ textAlign: "center" }}
                          >
                            {this.state.name}
                            <br />
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            style={{ textAlign: "center" }}
                          >
                            My Address :<br />
                            {this.state.owner1.substring(0, 6)}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            style={{ textAlign: "center" }}
                          >
                            Current Intitute/Organization :{" "}
                            {this.state.owner2.substring(0, 6)}
                          </Typography>
                        </Grid>
                        <Grid container justify="center">
                          <br />
                          <Button
                            variant="outlined"
                            color="secondary"
                            style={{ marginTop: "25px" }}
                          >
                            <a href="/my">View Profile</a>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container />
                    {/* <hr /> */}
                    <List style={{ textAlign: "center" }}>
                      <ListItem
                        button
                        onClick={this.showDocs.bind(this)}
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <FolderIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Link to="/mydocs">
                            <Typography variant="h6">My Documents</Typography>
                          </Link>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <MailIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Link to="/reqs">
                            <Typography variant="h6">My Requests</Typography>
                          </Link>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <FolderIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Link to="/pendapp">
                            <Typography variant="h6">
                              Pending Approvals
                            </Typography>
                          </Link>
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                </Card>
              </Grid>
              <Grid
                item
                md={6}
                style={{
                  padding: "15px"
                }}
              >
                <Switch>
                  <Route
                    path="/pendapp"
                    component={() => (
                      <div>
                        <MyRequest
                          accounts={this.state.accounts}
                          contract={this.state.contract}
                        />
                      </div>
                    )}
                  />
                  <Route
                    path="/myreqs"
                    component={() => (
                      <div>
                        <MyRequest
                          accounts={this.state.accounts}
                          contract={this.state.contract}
                        />
                      </div>
                    )}
                  />
                </Switch>

                <Route
                  path="/mydocs"
                  component={() => (
                    <div>
                      <MyDocuments
                        accounts={this.state.accounts}
                        contract={this.state.contract}
                      />
                    </div>
                  )}
                />
              </Grid>

              <Grid
                item
                md={3}
                style={{
                  padding: "15px"
                }}
              >
                <Card style={{ margin: "15px" }}>
                  <Typography
                    variant="h4"
                    style={{ padding: "10px", color: "#3F51B5" }}
                  >
                    Notifications
                    <Typography variant="caption" style={{ marginLeft: "5px" }}>
                      (Click on the Notification to view.)
                    </Typography>
                  </Typography>
                  <List>
                    {/* {this.props.student.notifications.map(notifications => {
                    return (
                      <div>
                        <ListItem button>
                          <ListItemText>
                            <Typography variant="title">
                              {notifications.institute} : Request to view{" "}
                              {notifications.docname}
                            </Typography>
                          </ListItemText>
                        </ListItem>
                        <Divider />
                      </div>
                    );
                  })} */}
                  </List>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default StudentDashBoard;

// state = {
//   student:{
//     name:"Tom Cruze",
//     address:"idjbsuvygfastrcxztrstrctvcc",
//     ownername:"MIT",
//     imgsrc:null,
//     documents:[{docname:"aadhar",uploader:"Govt of India",datestamp:"26/10/2018",uploaderaddress:"sduvyctcsarcysv"},
//     {docname:"aadhar11",uploader:"Govt of India",datestamp:"26/10/2018",uploaderaddress:"sduvyctcsarcysv"},
//     {docname:"aadhar12",uploader:"Govt of India",datestamp:"26/10/2018",uploaderaddress:"sduvyctcsarcysv"}
//   ],
//     notifications:[{institute:"microsoft",docname:"driving"},
//     {institute:"microsoft1",docname:"driving1"},
//     {institute:"microsoft2",docname:"driving2"}
//   ]
//   }
// }
// {/* <Grid
// item
// md={5}
// style={{
//   padding: "15px"
// }}
// >
// <Card style={{ margin: "15px" }}>
//   <Grid container>
//     <Grid item md={1}>
//       <Avatar
//         style={{ margin: "15px", backgroundColor: "#3F51B5" }}
//       >
//         <FolderIcon />
//       </Avatar>
//     </Grid>
//     <Grid item md={10}>
//       <Typography
//         variant="h4"
//         style={{ padding: "10px", color: "#3F51B5" }}
//       >
//         My Documents
//         <Typography
//           variant="caption"
//           style={{ marginLeft: "5px" }}
//         >
//           (Click on the Document name to view.)
//         </Typography>
//       </Typography>
//     </Grid>
//   </Grid>

//   <List>
//     {/* {this.props.student.documents.map(documents => {
//       return (
//         <div>
//           <ListItem button>
//             <ListItemText>
//               <Typography variant="title">
//                 {documents.docname}
//               </Typography>
//             </ListItemText>
//             <FullScreenDialog documents={documents} />
//           </ListItem>
//           <Divider />
//         </div>
//       );
//     })} */}

//     {/* pass props here by array mapping */}
//     <ListItem>
//       {/* <ListItemText>
//         <Typography variant="title">Add New Document</Typography>
//       </ListItemText> */}
//       <Button
//         variant="outlined"
//         color="secondary"
//         style={{ marginLeft: "200px" }}
//         onClick={this.handleClickOpen}
//       >
//         Add New Document
//       </Button>
//       {/* nvinvvertdfbtdntdnttntg */}

//       <Dialog
//         disableBackdropClick
//         disableEscapeKeyDown
//         open={this.state.open}
//         onClose={this.handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">
//           <Typography style={{ color: "#1a237e" }} variant="h4">
//             Add New Document
//           </Typography>
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Enter Document Name
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Name"
//             type="text"
//             fullWidth
//           />
//           <br />
//           <DialogContentText style={{ marginTop: "15px" }}>
//             Upload Document
//           </DialogContentText>
//           <Grid container justify="center">
//             <img
//               src={`https://gateway.ipfs.io/ipfs/${
//                 this.state.profilepic
//               }`}
//               alt="CNN"
//               style={{
//                 margin: "20px",
//                 height: "250px",
//                 width: "250px"
//               }}
//             />
//           </Grid>
//           <Button>Browse </Button>
//           <Button>Upload </Button>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={this.handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={this.handleClose} color="primary">
//             Confirm
//           </Button>
//         </DialogActions>
//       </Dialog>
//       {/* rnjvnfjvn */}
//     </ListItem>
//     <Divider />
//   </List>
// </Card>
// </Grid> */}
