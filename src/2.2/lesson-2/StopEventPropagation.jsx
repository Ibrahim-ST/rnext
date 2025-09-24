import React from "react";
import Button from "../components/Button";

const StopEventPropagation = () => {
  return (
    <div
      onClick={() => console.log("Toolbar Clicked")}
      className="border rounded-md w-full flex justify-center"
    >
      <Button onSmash={() => console.log("Playing!")}>Play Movie</Button>
      <Button onSmash={() => console.log("Uploading!")}>Upload Image</Button>
    </div>
  );
};

export default StopEventPropagation;
