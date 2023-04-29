import React from "react";
import classes from "./StarshipDetails.module.css";
import { useParams, Link } from "react-router-dom";
import StarshipImages from "../../assets/StarshipImage.json";
const StarshipDetails = (props) => {
  const { starshipName } = useParams();
  const starshipData = props.starshipData.find(
    (starship) => starship.name === starshipName
  );
  const starshipImage = StarshipImages.find(
    (starship) => starship.name === starshipName
  ).img;
  console.log(starshipData);
  return (
    <div className={classes.container}>
      <Link className={classes.back} to="/">
        Go Back
      </Link>
      <div className={classes["starship-info"]}>
        <div className={classes["image-box"]}>
          <img src={starshipImage} alt={starshipName} />
        </div>
        <h2>{starshipName}</h2>
        <div className={classes.details}>
          <p>
            {" "}
            <strong>Model: </strong> {starshipData.model}{" "}
          </p>
          <p>
            {" "}
            <strong>Hyperdrive Rating: </strong>{" "}
            {starshipData["hyperdrive_rating"]}{" "}
          </p>
          <p>
            {" "}
            <strong>Passengers: </strong> {starshipData.passengers}{" "}
          </p>
          <p>
            {" "}
            <strong>Max Atmosphering Speed: </strong>{" "}
            {starshipData["max_atmosphering_speed"]}{" "}
          </p>
          <p>
            {" "}
            <strong>Manufacturer: </strong> {starshipData.manufacturer}{" "}
          </p>
          <p>
            {" "}
            <strong>Crew: </strong> {starshipData.crew}{" "}
          </p>
          <p>
            {" "}
            <strong>Cargo Capacity: </strong> {starshipData["cargo_capacity"]}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetails;
