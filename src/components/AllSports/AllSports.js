import React from "react";
import useSports from "../../hooks/useSports";

const AllSports = () => {
  const { sports } = useSports();
  return (
    <div className="grid grid-cols-4 gap-3 container mx-auto">
      {sports.map((sport, index) => (
        <div key={index}>
          <div>
            <img
              className="mx-auto"
              src={sport?.strSportThumb ? sport?.strSportThumb : ""}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllSports;
