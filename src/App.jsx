import "./App.css";
import PreventingDefault from "./2.2/lesson-2/PreventingDefault";
import StopEventPropagation from "./2.2/lesson-2/StopEventPropagation";

function App() {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto flex justify-center items-center">
      {/* <StopEventPropagation /> */}
      <PreventingDefault />
    </div>
  );
}

export default App;
