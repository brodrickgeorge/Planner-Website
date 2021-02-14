import React from "react";
import moment from "moment";
import spot1 from "./img/spot1.jpg";

const SpotSummary = ({ spot }) => {
  return (
    <div className="card z-depth-4 spot-summary">
      <div class="card-image">
        <img src={spot1} />
        <span className="card-title">{spot.title}</span>
      </div>
      <div className="card-content grey-text text-darken-3">
        <p>
          Posted by {spot.authorFirstName} {spot.authorLastName}
        </p>
        <p className="grey-text">
          {moment(spot.createdAt.toDate()).format("MMM Do, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default SpotSummary;
