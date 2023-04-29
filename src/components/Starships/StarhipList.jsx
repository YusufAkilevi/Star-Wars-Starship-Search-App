import React from "react";
import StarshipCart from "./Starship";
import classes from "./StarshipList.module.css";
import Loading from "../UI/Loading";

const StarshipList = (props) => {
  // if (props.starshipData.length === 0) throw new Error("something went wrong");
  if (props.starshipData.length === 0 && !props.loading) {
    return (
      <div style={{ marginTop: "3rem" }}>
        Sorry! Starship could NOT found. Please try another one.
      </div>
    );
  }
  return (
    <React.Fragment>
      {props.loading && props.pageNumber === 0 ? (
        <Loading />
      ) : (
        <ul className={classes["starship-list"]}>
          {props.starshipData
            ?.slice(0, props.pageNumber * 10)
            .map((starship) => (
              <StarshipCart key={starship.name} starship={starship} />
            ))}
        </ul>
      )}

      {props.starshipData.length > 10 &&
        props.pageNumber > 0 &&
        props.pageNumber < 4 && (
          <button className={classes.button} onClick={props.onPageNumberHandle}>
            Load More
          </button>
        )}
    </React.Fragment>
  );
};

export default StarshipList;
