import React from "react";
import SpotSummary from "./SpotSummary";
import { Link } from "react-router-dom";

const SpotList = ({ spots }) => {
  return (
    <div className="spot-list section">
      {spots &&
        spots.map((spot) => {
          return (
            <Link key={spot.id} to={"/spot/" + spot.id}>
              <SpotSummary spot={spot} />
            </Link>
          );
        })}
    </div>
  );
};

export default SpotList;
