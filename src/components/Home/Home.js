import React from "react";
import { Link } from "react-router-dom";
import useSports from "../../hooks/useSports";

const Home = () => {
  const { sports } = useSports();
  const result = sports.filter((sport, index) => index <= 3);
  return (
    <>
      <div className="grid grid-cols-4 container mx-auto gap-3 my-3">
        {result.map((sport, index) => (
          <div key={index} className="border-2 p-2">
            <div>Type: {sport.strSport}</div>
            <div>
              <img src={sport.strSportThumb} className="mx-auto" alt="" />
            </div>
            <div>{sport.strFormat}</div>
          </div>
        ))}
      </div>
      <Link to="/allsports" className="bg-slate-400 px-3 rounded-md py-1">
        See All Sports
      </Link>
    </>
  );
};

export default Home;
