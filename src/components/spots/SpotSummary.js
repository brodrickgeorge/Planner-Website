import React from "react";

const SpotSummary = ({ spot }) => {
  return (
    <div className="card z-depth-0 spot-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{spot.title}</span>
        <p>Posted by Brodrick George</p>
        <p className="grey-text"> 3rd September, 2am</p>
      </div>
    </div>
  );
};

export default SpotSummary;
