import React, { useEffect, useState } from "react";

const Country = () => {
  const [countries, setCountries] = useState([]);

  const [a, setA] = useState("A");
  const [b, setB] = useState("B");
  const [c, setC] = useState("C");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/2/all_countries.php")
      .then((res) => res.json())
      .then((data) => setCountries(data.countries));
  }, []);

  const handelA = (event) => {
    const value = event.target.innerText;
    setA(value);
    const result = countries.filter((country) => country.name_en[0] === a);
    setData(result);
  };

  const handelB = (event) => {
    setB(event.target.innerText);
    const result = countries.filter((country) => country.name_en[0] === b);
    setData(result);
  };

  const handelC = (event) => {
    setC(event.target.innerText);
    const result = countries.filter((country) => country.name_en[0] === c);
    setData(result);
  };
  return (
    <div>
      <div>
        <nav className="flex justify-around  mt-5">
          <span
            onClick={handelA}
            className="cursor-pointer inline-block bg-slate-300  px-10 rounded py-2"
          >
            A
          </span>
          <span
            onClick={handelB}
            className="cursor-pointer inline-block bg-slate-300  px-10 rounded py-2"
          >
            B
          </span>
          <span
            onClick={handelC}
            className="cursor-pointer inline-block bg-slate-300  px-10 rounded py-2"
          >
            C
          </span>
        </nav>
      </div>
      <span>
        {data.length > 0 ? (
          <>
            {data.map((country, index) => (
              <span
                className="border m-5 px-3 bg-slate-300 inline-block"
                key={index}
              >
                {country.name_en}
              </span>
            ))}
          </>
        ) : (
          <>
            {countries.map((country, index) => (
              <span
                className="border m-5 px-3 bg-slate-300 inline-block"
                key={index}
              >
                {country.name_en}
              </span>
            ))}
          </>
        )}
      </span>
    </div>
  );
};

export default Country;
