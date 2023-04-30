import React, { useEffect } from "react";
import classes from "./StarshipDetails.module.css";
import { useParams, Link, useLocation } from "react-router-dom";
import StarshipImages from "../../assets/StarshipImage.json";
import axios from "axios";
import BackIcon from "../UI/BackIcon";

const StarshipDetails = (props) => {
  const [starshipData, setStarshipData] = React.useState({});
  const [starshipImage, setStarshipImage] = React.useState("");
  const location = useLocation();
  useEffect(() => {
    axios
      .get(location.state.url)
      .then((res) => {
        setStarshipData(res.data);
        setStarshipImage(
          StarshipImages.find((starship) => starship.name === res.data.name).img
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={classes.container}>
      <Link className={classes.back} to="/">
        <BackIcon />
      </Link>
      <div className={classes["starship-info"]}>
        <div className={classes["image-box"]}>
          <img src={starshipImage} alt={starshipData.name} loading="lazy" />
        </div>
        <h2>{starshipData.name}</h2>
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
