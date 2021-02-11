import React, { Component } from "react";
import Notfications from "./Notifications";
import SpotList from "../spots/SpotList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { spots } = this.props;
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
  console.log(state);
  return {
    spots: state.firestore.ordered.spots,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "spots" }])
)(Dashboard);
