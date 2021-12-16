import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

const CardDetails = (props) => {
  let imageURL = "";
  if (props.info.image.length > 0) {
    imageURL = props.info.image;
  } else if (props.info.house === "Gryffindor") {
    imageURL =
      "https://i.pinimg.com/originals/1c/fa/07/1cfa0732cbe110a01dc156002fa56f09.jpg";
  } else if (props.info.house === "Slytherin") {
    imageURL =
      "https://www.logolynx.com/images/logolynx/53/5390e974544de6279c4d9cb6253e3a2c.jpeg";
  } else if (props.info.house === "Hufflepuff") {
    imageURL = "https://m.media-amazon.com/images/I/711ztwoNU2L._AC_SX425_.jpg";
  } else if (props.info.house === "Ravenclaw") {
    imageURL =
      "https://www.kindpng.com/picc/m/184-1842118_harry-potter-ravenclaw-logo-png-transparent-png.png";
  } else if (
    props.info.ancestry.includes("muggle") ||
    props.info.ancestry.includes("squib")
  ) {
    imageURL =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr7SnpPAAzXEKoP3WuqKrwGMVr6GOuVt87w&usqp=CAU";
  } else if (props.info.wizard === true) {
    imageURL =
      "data:image/jpeg;base64,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";
  } else if (props.info.species === "ghost") {
    imageURL = "https://c.tenor.com/2A0QJv658iMAAAAC/ghost-cartoon.gif";
  } else if (props.info.species === "giant") {
    imageURL =
      "https://cdn3.iconfinder.com/data/icons/people-69/100/Giant-512.png";
  } else if (props.info.species.includes("elf")) {
    imageURL =
      "https://cdn4.iconfinder.com/data/icons/harry-potter/100/final_collection-14-512.png";
  } else if (props.info.species === "goblin") {
    imageURL =
      "http://pm1.narvii.com/6957/c4607e9212a99cde6f025a091824ae93baa31a09r1-750-750v2_uhq.jpg";
  } else if (props.info.species === "owl") {
    imageURL =
      "https://www.redwolf.in/image/catalog/stickers/harry-potter-hedwig-sticker-india.jpg";
  } else if (props.info.species === "three-headed dog") {
    imageURL =
      "data:image/jpeg;base64,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";
  } else if (props.info.species === "centaur") {
    imageURL =
      "https://i.pinimg.com/originals/1a/e1/c1/1ae1c18aa008271a8a6836c4d9c18239.jpg";
  } else if (props.info.species === "dragon") {
    imageURL =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAnVu4_tCkqRyjF-_8YBpY0L-3OnmYcxYlQ&usqp=CAU";
  } else if (props.info.species === "acromantula") {
    imageURL =
      "https://www.hp-lexicon.org/wp-content/uploads/2017/03/acromantula.jpg";
  } else {
    // only buckbeak left
    imageURL =
      "https://rlv.zcache.com.au/cartoon_harry_potter_and_buckbeak_poster-r2acb236c261a40db8781874171b63d0b_wvk_8byvr_540.jpg";
  }

  let wordSpecies;
  if (props.info.wizard === true) {
    wordSpecies = "Wizard";
  } else {
    const species = props.info.species.split("");
    species.unshift(species[0].toUpperCase());
    species.splice(1, 1);
    wordSpecies = species.join("");
  }

  let altNames = "";
  if (props.info.alternate_names == "") {
    altNames = "Has no fancy names.";
  } else {
    for (let i = 0; i < props.info.alternate_names.length; i++)
      if (i === props.info.alternate_names.length - 1) {
        altNames = altNames + props.info.alternate_names[i] + ".";
      } else {
        altNames = altNames + props.info.alternate_names[i] + ", ";
      }
  }

  let house = "";
  if (props.info.house.length > 1) {
    house = props.info.house;
  } else {
    house = "Didnt get sorted into a House";
  }

  let dob = "";
  if (props.info.dateOfBirth.length > 1) {
    dob = props.info.dateOfBirth;
  } else {
    dob = "Oops! Its a secret....";
  }

  let age;
  age = 2021 - props.info.yearOfBirth;
  if (age === 2021) {
    age = "Ageless";
  }

  let ancestry;
  if (props.info.ancestry.length > 1) {
    ancestry = props.info.ancestry;
  } else {
    const mystery = [
      "Picked up from Rubbish Bin",
      "Popped out of a Rock",
      "Blessed by God",
      "Dropped off a beanstalk",
      "Came from Narnia",
      "Dragon's Descent",
    ];
    ancestry = mystery[Math.floor(Math.random() * 6)];
  }

  let eyeColour;
  if (props.info.eyeColour.length > 1) {
    eyeColour = props.info.eyeColour;
  } else eyeColour = "Rainbow-Coloured";

  let actorGender;
  if (props.info.gender === "male") {
    actorGender = "Actor";
  } else actorGender = "Actress";

  let actor;
  if (props.info.actor.length > 1) {
    actor = props.info.actor;
  } else actor = "Cameo by Ditto";

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.info.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={imageURL} height="150px" roundedCircle />
          <h4>{wordSpecies} Statistics</h4>
          <p>
            Alternate Names: {altNames}
            <br />
            Gender: {props.info.gender}
            <br /> House: {house}
            <br />
            DOB: {dob}
            <br />
            Age: {age}
            <br /> Ancestry: {ancestry}
            <br /> Eye Colour: {eyeColour}
            <br /> {actorGender}: {actor}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardDetails;
