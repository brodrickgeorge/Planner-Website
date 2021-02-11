import React, { Component } from "react";
import Notfications from "./Notifications";
import SpotList from "../spots/SpotList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <SpotList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notfications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
