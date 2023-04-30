import React, { useState } from "react";
import classes from "./Header.module.css";
import starWarsLogo from "../../assets/Star_Wars_Yellow_One_Line_Logo.svg";
const Header = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    props.onGetSearchInput(searchInput);
  };
  const searchInputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <header className={classes.header}>
      <div>
        <img className={classes.logo} src={starWarsLogo} alt="star wars logo" />
      </div>
      <form onSubmit={submitHandler}>
        <label>Name / Model</label>
        <input
          value={searchInput}
          onChange={searchInputChangeHandler}
          type="text"
          placeholder="Name / Model"
        />
        <button type="submit">Search</button>
      </form>
      <hr />
    </header>
  );
};

export default Header;
