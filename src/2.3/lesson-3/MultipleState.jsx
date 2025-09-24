import React from 'react';
import { useState } from 'react';
import Button from '../components/Button';
import { sculptureList } from './data';

const MultipleState = () => {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
      setIndex(index + 1);
    }
 
    function handleMoreClick() {
      setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
      <div>
        <button
          onClick={handleNextClick}
          className="bg-red-600 m-2 p-2 rounded-md text-white"
        >
          Next Click
        </button>
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button
          onClick={handleMoreClick}
          className="bg-green-600 m-2 p-2 rounded-md text-white"
        >
          {showMore ? "Hide" : "Show"} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
    );
};

export default MultipleState;