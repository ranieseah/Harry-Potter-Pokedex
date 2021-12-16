import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import ShowCharacters from "./components/Show-Characters";
import charContext from "./components/context/character-context";
import Compare from "./components/Compare";

function App() {
  const [characters, setCharacters] = useState([]);
  const [compChar, setCompChar] = useState([]);
  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacters(data);
  };

  useEffect(() => {
    const url = "http://hp-api.herokuapp.com/api/characters";
    fetchData(url);
  }, []);

  return (
    <>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/all-char">
        <charContext.Provider value={{ characters }}>
          <ShowCharacters />
        </charContext.Provider>
      </Route>
      <Route path="/compare">
        <Compare char={compChar} />
      </Route>
    </>
  );
}

export default App;
