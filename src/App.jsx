import React from 'react';
import State from './2.6/lesson-6/State';
import Counter from './2.6/lesson-6/Counter';
import StateOverTime from './2.6/lesson-6/StateOverTime';

const App = () => {
  return (
    <div className = 'h-screen w-full max-w-7xl mx-auto  flex justify-center items-center align-baseline' >
      {/* <State /> */}
      {/* <Counter /> */}
      <StateOverTime />
    </div>
  );
};

export default App;