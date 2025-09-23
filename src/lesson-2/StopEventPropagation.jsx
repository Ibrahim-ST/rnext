import React from "react";
import Button from "../components/Button";

const StopEventPropagation = () => {
  return (
    <div
      onClick={() => alert("Toolbar Clicked")}
      className="border rounded-md w-full flex justify-center"
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
};

export default StopEventPropagation;
