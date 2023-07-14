import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const allCharacters = await axios.get(
      "http://34.125.137.94:8000/characters"
    );
    setCharacters(allCharacters.data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  console.log(characters);

  return (
    <>
      <h1>hello world</h1>
      {/* <button onClick={getCharacters}>Click me</button> */}
    </>
  );
}

export default App;
