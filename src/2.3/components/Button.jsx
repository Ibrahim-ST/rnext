import React from 'react';

const Button = ({ onSmash, children }) => {
  return (
    <button
      onClick={(e) => {
        console.dir(e);
        e.stopPropagation();
        onSmash();
      }}
      className="bg-red-600 m-2 p-2 rounded-md text-white"
    >
      {children}
    </button>
  );
};

export default Button;


