import BoxOne from "./components/boxOne";
import LoadingSequence from "./components/LoadingSequence";
import ScaleAndDrag from "./components/ScaleAndDrag";
import Staggered from "./components/Staggered";

function App() {
  return (
    <div className="container mx-auto">
      {/* <BoxOne /> */}
      {/* <ScaleAndDrag /> */}
      <LoadingSequence />
      <Staggered />
    </div>
  );
}

export default App;
