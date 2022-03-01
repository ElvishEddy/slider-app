import { useState, useEffect } from "react";

import "./App.scss";
import Person from "./components/users/Person";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="App">
      <h1>
        <span className="slash">/</span> Reviews
      </h1>
      <div className="container">
        {people &&
          people.length > 0 &&
          people.map((person, personIndex) => {
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <Person key={personIndex} person={person} position={position} />
            );
          })}
        <button className="btn-left" onClick={() => setIndex(index - 1)}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>{" "}
        </button>
        <button className="btn-right" onClick={() => setIndex(index + 1)}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
