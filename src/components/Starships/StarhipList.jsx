import React, { useState, useEffect } from "react";
import StarshipCart from "./Starship";
import classes from "./StarshipList.module.css";
import axios from "axios";
import { API_URL } from "../../config";

const StarshipList = (props) => {
  const [starshipData, setStarshipData] = useState([]);
  const [nextPageURL, setNextPageURL] = useState("");
  useEffect(() => {
    getData(API_URL);
  }, []);
  const getData = async (url) => {
    try {
      const { data: res } = await axios.get(url);
      console.log(res);
      setNextPageURL(res.next ? res.next : "");
      setStarshipData((prevState) => [...prevState, ...res.results]);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(starshipData);
  const clickHandler = () => {
    getData(nextPageURL);
  };

  return (
    <React.Fragment>
      <ul className={classes["starship-list"]}>
        {starshipData?.map((starship) => (
          <StarshipCart key={starship.name} starship={starship} />
        ))}
      </ul>
      {nextPageURL.length > 0 && (
        <button className={classes.button} onClick={clickHandler}>
          Load More
        </button>
      )}
    </React.Fragment>
  );
};

export default StarshipList;
