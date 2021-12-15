import React from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.css";
import { Row, Container, Button } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <Container bsPrefix={styles.main}>
        <Row>
          <h1> Harry Potter Pokedex</h1>

          <Link to="/all-char">
            <Button variant="outline-warning">Let's Go!</Button>
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default Main;
