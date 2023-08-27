import React from "react";

const Model = ({ glassesInfor }) => {
  return (
    <div className="model">
      <div className="before">
        <img src="/img/glassesImage/model.jpg" alt="model" />
        <p>BEFORE</p>
      </div>
      <div className="after">
        <img src="/img/glassesImage/model.jpg" alt="model" />
        <p>AFTER</p>
        <div className="galsses">
          <img
            src={`/img/${glassesInfor.url.replace("./", "")}`}
            alt={glassesInfor.name}
          />
        </div>
        <div className="glasses-infor">
          <h6>{glassesInfor.name}</h6>
          <p>{glassesInfor.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Model;
