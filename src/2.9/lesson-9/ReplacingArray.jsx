let initialCounters = [0, 0, 0];
import { useState } from "react";

const ReplacingArray = () => {
  const [counters, setCounters] = useState(initialCounters);

  return (
    <div>
      <h1>This is ReplacingArray component</h1>
    </div>
  );
};

export default ReplacingArray;
