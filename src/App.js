import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import ShowCharacters from "./components/Show-Characters";
import charContext from "./components/context/character-context";

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacters(data);
  };

  useEffect(() => {
    const url = "http://hp-api.herokuapp.com/api/characters";
    fetchData(url);
  }, []);

  console.log(characters[1]);

  return (
    <>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/all-char">
        <charContext.Provider value={{ characters }}>
          <ShowCharacters char={characters[0]} />
        </charContext.Provider>
      </Route>
    </>
  );
}

export default App;
