import React from 'react';

function Picpost({ Pic, onBgClick }) {
  return (
    <div className="Pic-Post">
      
      <div className="Pic-Post-Bg" onClick={onBgClick} />

      
      <div className="Pic-Post-Content">
        <img src={Pic.FullUrl} alt={Pic.title} />
        <h4>{Pic.title}</h4>
      </div>
    </div>
  );
}

export default Picpost;
