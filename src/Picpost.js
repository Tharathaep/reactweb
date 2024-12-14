import React from 'react';

function Picpost({ Pic, onBgClick }) {
  return (
    <div className="popup-content">
      <div className="popup-header">
        <h2>{Pic.title}</h2>
      </div>
      <div className="popup-body">
        <img src={Pic.FullUrl} alt={Pic.title} />
      </div>
      <button onClick={onBgClick}>Close</button>
    </div>
  );
}

export default Picpost;
