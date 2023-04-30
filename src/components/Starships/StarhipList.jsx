import React, { useEffect } from "react";
import StarshipCart from "./Starship";
import classes from "./StarshipList.module.css";
import Loading from "../UI/Loading";

const StarshipList = (props) => {
  if (props.starshipData.length === 0 && !props.loading) {
    return (
      <div style={{ marginTop: "3rem" }}>
        {`No results found for this search "${props.input}". Please try another one.`}
      </div>
    );
  }
  return (
    <React.Fragment>
      {props.loading && props.starshipData.length === 0 ? (
        <Loading style={{ marginTop: 24 }} />
      ) : (
        <ul className={classes["starship-list"]}>
          {props.starshipData.map((starship) => (
            <StarshipCart key={starship.name} starship={starship} />
          ))}
        </ul>
      )}

      {props.enableLoadMore && !props.loading && (
        <button className={classes.button} onClick={props.onLoadMoreClick}>
          Load More
        </button>
      )}
      {props.enableLoadMore && props.loading && <Loading />}
    </React.Fragment>
  );
};

export default StarshipList;
