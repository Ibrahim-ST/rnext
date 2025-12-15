import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  let fullName = firstName + " " + lastName;

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{" "}
        <input
          className="border rounded-md my-2"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{" "}
        <input
          className="border rounded-md my-2"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
