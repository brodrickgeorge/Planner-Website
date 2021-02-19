import React from "react";
import moment from "moment";

const SpotSummary = ({ spot }) => {
  return (
    <div className="card z-depth-0 project-summary">
   <div className="card-content grey-text text-darken-3">
     <span className="card-title ">{spot.title}</span>
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
