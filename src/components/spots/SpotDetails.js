import React from "react";
import spot1 from "./img/spot1.jpg";

const SpotDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section spot-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Spot title - {id} </span>
          <img width="100%" height="100%" src={spot1} alt="skate spot" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Brodrick George</div>
          <div>November 7th, 2020</div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
