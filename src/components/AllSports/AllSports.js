import React from "react";
import useSports from "../../hooks/useSports";

const AllSports = () => {
  const { sports } = useSports();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 container mx-auto">
      {sports.map((sport, index) => (
        <div className="m-3" key={index}>
          <div>
            <img
              className="mx-auto w-full"
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
