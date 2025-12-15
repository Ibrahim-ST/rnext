import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
  ]);

  const handleAddInput = () => {
    const nextId = inputs[inputs.length - 1].id + 1;

    setInputs([
      ...inputs,
      {
        id: nextId,
        label: "input",
      },
    ]);

    console.log(nextId);
  };

  return (
    <div>
      {inputs.map((input) => (
        <div
          key={input.id}
          style={{
            marginBottom: "5px",
          }}
        >
          <input className="border rounded-md" type="text" label={input.label} name="" id="" />
        </div>
      ))}

      <div className="my-4">
        <button className="border p-1 rounded-md" onClick= {handleAddInput}>Add Input</button>
      </div>
    </div>
  );
};

export default Form;
