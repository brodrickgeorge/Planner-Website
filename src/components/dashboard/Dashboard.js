import React, { Component } from "react";
import Notfications from "./Notifications";
import SpotList from "../spots/SpotList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { spots, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <SpotList spots={spots} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notfications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    spots: state.firestore.ordered.spots,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "spots" }])
)(Dashboard);
