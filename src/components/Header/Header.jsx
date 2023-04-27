import React from "react";
import classes from "./Header.module.css";
import starWarsLogo from "../../assets/Star_Wars_Yellow_One_Line_Logo.svg";
const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <img className={classes.logo} src={starWarsLogo} alt="star wars logo" />
      </div>
      <form>
        <label>Name / Model</label>

        <input type="text" placeholder="Name / Model" />
        <button>Search</button>
      </form>
      <hr />
    </header>
  );
};

export default Header;
