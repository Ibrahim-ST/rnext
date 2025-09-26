import React from "react";
import { useState } from "react";
import Button from "../components/Button";

const State = () => {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage]  = useState('Hi');

    if(isSent) {
        return <h1>Your message is on the way!</h1>
    }
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}>
        <textarea placeholder='Message' value={message} 
        onChange={(e) => setMessage(e.target.value)}
         name="" id="" className="border rounded-md"></textarea>
        <Button>Send</Button>
      </form>
    </div>
  );
};

export default State;


function sendMessage(message) {
  // ...
}