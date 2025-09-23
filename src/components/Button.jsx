import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="bg-red-600 m-2 p-2 rounded-md text-white"
    >
      {children}
    </button>
  );
};

export default Button;


