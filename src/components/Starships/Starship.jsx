import React from "react";
import classes from "./Starship.module.css";
import starshipImages from "../../assets/StarshipImage";

const Starship = ({ starship }) => {
  const starshipImage = starshipImages.find(
    (image) => image.name === starship.name
  );

  return (
    <li className={classes.starship}>
      <div className={classes["image-box"]}>
        <img src={starshipImage.img} alt={starship.model} loading="lazy" />
      </div>
      <div className={classes.details}>
        <h3>{starship.name}</h3>
        <p>
          {" "}
          <strong>Model: </strong>
          {starship.model}{" "}
        </p>
        <p>
          <strong>Hyperdrive Rating: </strong>
          {starship["hyperdrive_rating"]}
        </p>
      </div>
    </li>
  );
};

export default Starship;
