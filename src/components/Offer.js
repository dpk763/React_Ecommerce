import React from "react";

const Offer = (props) => {
  return (
    <>
      <div className="card my-2 offer-card" style={{ width: props.size }}>
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-box" style={{width:props.boxsize}}>
          <h5>{props.htxt}</h5>
          <p>{props.txt}</p>
          <div className="btn btn-dark text-light">{props.btn}</div>
        </div>
      </div>
    </>
  );
};

export default Offer;
