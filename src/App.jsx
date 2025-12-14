import React from 'react';
import State from './2.6/lesson-6/State';
import Counter from './2.6/lesson-6/Counter';
import StateOverTime from './2.6/lesson-6/StateOverTime';
import BatchState from './2.7/lesson-7/BatchState';
import UpdatingObjects from './2.8/lesson-8/UpdatingObjects';
import SpreadingObjects from './2.8/lesson-8/SpreadingObjects';
import DynamicStateChange from './2.8/lesson-8/DynamicStateChange';
import UpdatingNestedObjects from './2.8/lesson-8/UpdatingNestedObjects';
import AddOnArray from './2.9/lesson-9/AddOnArray';
import RemoveFromArray from './2.9/lesson-9/RemoveFromArray';
// import Immer from './2.8/lesson-8/UseImmer';
import TransformArray from './2.9/lesson-9/TransformArray';


const App = () => {
  return (
    <div className = 'h-screen w-full max-w-7xl mx-auto  flex flex-col justify-center items-center ' >
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <StateOverTime /> */}
      {/* <BatchState /> */}
      {/* <UpdatingObjects />  */}
      {/* <SpreadingObjects /> */}
      {/* <DynamicStateChange />  */}
      {/* <UpdatingNestedObjects />  */}
      {/* <Immer /> */}
      {/* <AddOnArray /> */}
      {/* <RemoveFromArray /> */}
      <TransformArray />
    </div>
  );
};

export default App;