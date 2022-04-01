import React from 'react';
import './RugImageCard.scss';

function RugImageCard({ rug }) {
  return (
    <div className="RugImageCard">
      <li>
        <div className="rug-item">
          <div className="imgWrapper">
            <img alt="rug" src={rug.imageUrl} />
          </div>
          <div className="rug-info">
            <h2 className="rug-name">{rug.name}</h2>
            <p className="rug-price">{rug.price}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default RugImageCard;
