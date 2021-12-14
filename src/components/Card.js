import React from "react";

const Card = (props) => {
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqyal0F7pllnt30lx1UTMawDAF8HNkAJzZQ&usqp=CAU";
  } else if (props.info.wizard === true) {
    imageURL =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZV87ZimHwunE41zr-0822fZ2-y0FXtlzKjQ&usqp=CAU";
  } else if (props.info.species === "ghost") {
    imageURL = "https://c.tenor.com/2A0QJv658iMAAAAC/ghost-cartoon.gif";
  } else if (props.info.species === "giant") {
    imageURL =
      "https://cdn3.iconfinder.com/data/icons/people-69/100/Giant-512.png";
  } else if (props.info.species.includes("elf")) {
    imageURL =
      "https://cdn4.iconfinder.com/data/icons/harry-potter/100/final_collection-14-512.png";
  }
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageURL} height="200px" />
      <div className="card-body">
        <h5 className="card-title">{props.info.name}</h5>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
};

export default Card;
