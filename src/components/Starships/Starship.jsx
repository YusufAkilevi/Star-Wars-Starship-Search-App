import React, { useEffect, useState } from "react";
import classes from "./Starship.module.css";
import starshipImages from "../../assets/StarshipImage";
import { Link, useNavigate } from "react-router-dom";

const Starship = ({ starship }) => {
  const starshipImage = starshipImages.find(
    (image) => image.name === starship.name
  );
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(`/starshipDetails/${starship.name}`, { state: starship });
  // }, [clicked]);

  return (
    <li className={classes.starship}>
      <Link className={classes.link} to={`/starshipDetails/${starship.name}`}>
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
      </Link>
    </li>
  );
};

export default Starship;
