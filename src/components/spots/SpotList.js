import React from "react";
import SpotSummary from "./SpotSummary";

const SpotList = ({ spots }) => {
  return (
    <div className="spot-list section">
      {spots &&
        spots.map((spot) => {
          return <SpotSummary spot={spot} key={spot.id} />;
        })}
    </div>
  );
};

export default SpotList;
