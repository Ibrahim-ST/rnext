import "./App.css";
import ComponentsMemory from "./lesson-3/ComponentsMemory"; 
import MultipleState from "./lesson-3/MultipleState";

function App() {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto flex justify-center items-center">
      {/* <ComponentsMemory /> */}
      <MultipleState />
      <MultipleState />
    </div>
  );
}

export default App;
