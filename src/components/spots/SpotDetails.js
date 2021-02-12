import React from "react";
import spot1 from "./img/spot1.jpg";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const SpotDetails = (props) => {
  const { spot, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (spot) {
    return (
      <div className="container section spot-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{spot.title}</span>
            <img width="100%" height="100%" src={spot1} alt="skate spot" />
            <p>{spot.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {spot.authorFirstName} {spot.authorLastName}
            </div>
            <div>November 7th, 2020</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Spot...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const spots = state.firestore.data.spots;
  const spot = spots ? spots[id] : null;
  return {
    spot: spot,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "spots" }])
)(SpotDetails);
