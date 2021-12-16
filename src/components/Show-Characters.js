import React, { useContext, useState } from "react";
import styles from "./characters.module.css";
import Card from "./Card";
import charContext from "./context/character-context";
import FilterBar from "./Filter-Bar";
import CardDetails from "./Card-Details";
import { Container, Row } from "react-bootstrap";

const ShowCharacters = () => {
  const charCtx = useContext(charContext);
  const [click, setClick] = useState();
  const [checked, setChecked] = useState({
    house: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw", ""],
    gender: ["male", "female"],
    hogwartsStudent: [true, false],
    hogwartsStaff: [true, false],
    alive: [true, false],
  });
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState();

  const updateClick = () => {
    if (
      click === "Ravenclaw" ||
      click === "Slytherin" ||
      click === "Hufflepuff" ||
      click === "Gryffindor" ||
      click === ""
    ) {
      const currentIndex = checked.house.indexOf(click);
      const newHouse = checked;
      if (currentIndex === -1) {
        newHouse.house.push(click);
      } else {
        newHouse.house.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newHouse);
    }
    if (click === "male" || click === "female") {
      const currentIndex = checked.gender.indexOf(click);
      const newGender = checked;

      if (currentIndex === -1) {
        newGender.gender.push(click);
      } else {
        newGender.gender.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newGender);
    }
    if (click === "Student") {
      const currentIndex = checked.hogwartsStudent.indexOf(true);
      const newStudent = checked;

      if (currentIndex === -1) {
        newStudent.hogwartsStudent.push(true);
      } else {
        newStudent.hogwartsStudent.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newStudent);
    }
    if (click === "NonStudent") {
      const currentIndex = checked.hogwartsStudent.indexOf(false);
      const newStudent = checked;

      if (currentIndex === -1) {
        newStudent.hogwartsStudent.push(false);
      } else {
        newStudent.hogwartsStudent.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newStudent);
    }
    if (click === "Staff") {
      const currentIndex = checked.hogwartsStaff.indexOf(true);
      const newStaff = checked;

      if (currentIndex === -1) {
        newStaff.hogwartsStaff.push(true);
      } else {
        newStaff.hogwartsStaff.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newStaff);
    }
    if (click === "NonStaff") {
      const currentIndex = checked.hogwartsStaff.indexOf(false);
      const newStaff = checked;

      if (currentIndex === -1) {
        newStaff.hogwartsStaff.push(false);
      } else {
        newStaff.hogwartsStaff.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newStaff);
    }
    if (click === "Alive") {
      const currentIndex = checked.alive.indexOf(true);
      const newAlive = checked;

      if (currentIndex === -1) {
        newAlive.alive.push(true);
      } else {
        newAlive.alive.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newAlive);
    }
    if (click === "Dead") {
      const currentIndex = checked.alive.indexOf(false);
      const newDead = checked;

      if (currentIndex === -1) {
        newDead.alive.push(false);
      } else {
        newDead.alive.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newDead);
    }
  };
  const checkFilter = (char) => {
    return (
      checked.house.indexOf(char.house) >= 0 &&
      checked.gender.indexOf(char.gender) >= 0 &&
      checked.hogwartsStudent.indexOf(char.hogwartsStudent) >= 0 &&
      checked.hogwartsStaff.indexOf(char.hogwartsStaff) >= 0 &&
      checked.alive.indexOf(char.alive) >= 0
    );
  };

  const openPopup = () => {
    setModalShow(true);
  };

  const printList = charCtx.characters.filter(checkFilter);
  let listChar = [];
  for (let i = 0; i < printList.length; i++) {
    listChar.push(
      <Card
        info={printList[i]}
        function={openPopup}
        setModalContent={setModalContent}
      />
    );
  }

  updateClick();

  return (
    <>
      {modalShow && (
        <CardDetails
          show={modalShow}
          onHide={() => setModalShow(false)}
          info={modalContent}
        />
      )}
      <div className={styles.background}>
        <FilterBar function={setClick} />
        <Container>
          <Row>Results: {printList.length}</Row>
          {listChar.length > 0 && <div className="row">{listChar}</div>}
          {listChar.length === 0}
        </Container>
      </div>
    </>
  );
};

export default ShowCharacters;
