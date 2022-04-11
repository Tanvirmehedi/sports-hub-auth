import { useEffect, useState } from "react";

const useSports = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setSports(result.sports);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return { sports };
};

export default useSports;
