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
import LandingPage from "./Trials/LandingPage";
import ViewProfile from "./Trials/ViewProfile";
import HoverPop from "./Trials/HoverPop";
import TransferOwnership from "./Trials/TransferOwnership";

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
        {/* <SearchResults /> */}
        {/* <RequestCard /> */}
        {/* <LandingPage /> */}
        {/* <ViewProfile /> */}
        {/* <HoverPop /> */}
        {/* <MyDocuments /> */}
        <TransferOwnership />
      </div>
    );
  }
}

export default App;
