import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const handelSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlayers(data.player));
  });

  const handelOnSubmit = (event) => {
    event.preventDefault();
    navigate("/displaysearch");
  };

  return (
    <div className="search-container  text-slate-100 py-36">
      <div className="search-form-container">
        <form onSubmit={handelOnSubmit}>
          <div className="form-group">
            <input
              onBlur={handelSearchValue}
              className="rounded-md rounded-r-none h-9 text-xl text-slate-700 pl-1"
              type="text"
              name="item"
              id="item"
              placeholder="Search Sports"
            />
            <button
              className="bg-slate-200 h-9 text-xl px-3 text-slate-600 rounded-md rounded-l-none"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
