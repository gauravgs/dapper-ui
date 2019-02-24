import React, { Component } from "react";
import ClippedDrawer from "./Trials/ClippedDrawer";
import DashboardC from "./Trials/DashboardC";
import RequestCard from "./Trials/RequestCard";
import MyProfile from "./Trials/MyProfile";
import TopNav from "./Trials/TopNav";
import Sample from "./Trials/Sample";
import PendingApproval from "./Trials/PendingApproval";
import MyDocuments from "./Trials/MyDocuments";
import MyRequests from "./Trials/MyRequests";
import InstDashboard from "./Trials/InstDashboard";
import DrawerRHS from "./Trials/DrawerRHS";
import SearchResults from "./Trials/SearchResults";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        {/* <ClippedDrawer /> */}
        {/* <DashboardC /> */}
        {/* <RequestCard /> */}
        {/* <MyProfile /> */}
        {/* <PendingApproval /> */}
        {/* <MyDocuments /> */}
        {/* <MyRequests /> */}
        {/* <InstDashboard /> */}
        {/* <DrawerRHS /> */}
        {/* <TopNav /> */}
        {/* <Sample /> */}
        <SearchResults />
        {/* <RequestCard /> */}
      </div>
    );
  }
}

export default App;
