import React, { useState } from "react";
import "./glassesShop.css";
import Header from "./Header";
import Model from "./Model";
import ListGlasses from "./ListGlasses";
import data from "../data/dataGlasses.json";

const GlassesShop = () => {
  const [selectedGlassesId, setSelectedGlassesId] = useState(1);
  const [glassesInfor, setGlassesInfor] = useState(
    data.find((glasses) => glasses.id === selectedGlassesId)
  );

  const changeGlasses = (id) => {
    setSelectedGlassesId(id);
    setGlassesInfor(data.find((glasses) => glasses.id === id));
  };

  return (
    <div className="glasses-shop">
      <Header />
      <Model glassesInfor={glassesInfor} />
      <ListGlasses
        data={data}
        selectedGlassesId={selectedGlassesId}
        changeGlasses={changeGlasses}
      />
    </div>
  );
};

export default GlassesShop;
