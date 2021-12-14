import React from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.css";

const Main = () => {
  return (
    <>
      <div className={styles.main}>
        <h1> Harry Potter Pokedex</h1>
        <Link to="/all-char">
          <button className="btn btn-outline-warning">lets go!</button>
        </Link>
      </div>
    </>
  );
};

export default Main;
