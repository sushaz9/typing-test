import "./App.css";
import { usestate, useEffect } from "react";
import randomWords from "random-words";

const numWords = 200;
const seconds = 60;

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  function generateWords() {
    return new Array(numWords).fill(null).map(() => randomWords());
  }

  return <div className="App">{JSON.stringify(words)}</div>;
}

export default App;
