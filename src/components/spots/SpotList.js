import React from "react";
import SpotSummary from "./SpotSummary";
import { Link } from "react-router-dom";

const SpotList = ({ spots }) => {
  return (
    <div className="spot-list section">
      {spots &&
        spots.map((spot) => {
          return (
            <Link to={"/spot/" + spot.id}>
              <SpotSummary spot={spot} key={spot.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default SpotList;
