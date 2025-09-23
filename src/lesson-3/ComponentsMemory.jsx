import Button from "../components/Button";
import { sculptureList } from "./data";
import { useState } from "react";

const ComponentsMemory = () => {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  console.log(sculpture);
  return (
    <div className="border p-5 rounded-md">
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
      <Button onSmash={handleClick}>Next</Button>
    </div>
  );
};

export default ComponentsMemory;
