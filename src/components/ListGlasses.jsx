import React from "react";

const ListGlasses = ({ data, selectedGlassesId, changeGlasses }) => {
  return (
    <div className="list">
      <div>
        {data.map((item, index) => {
          const cutUrl = item.url.replace("./", "");
          const customUrl = `/img/${cutUrl}`;
          return (
            <div
              className={`img-container ${
                item.id === selectedGlassesId ? "active" : ""
              }`}
              key={index}
              onClick={() => changeGlasses(item.id)}
            >
              <p>{item.name}</p>
              <img src={customUrl} alt={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListGlasses;
