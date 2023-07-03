import "./App.css";
import { Overlay } from "./components/Overlay/Overlay";
import { WorldMap } from "./components/WorldMap/WorldMap";
import { useOverlay } from "./store/comparator/hooks";
import { DetailsCompare } from "./components/DetailsCompare/DetailsCompare";

function App() {
  const isOverlayVisible = useOverlay();

  return (
    <div className="mainContainer">
      <div className="worldWrapper">
        <h1>Select two countries to compare</h1>
        <WorldMap></WorldMap>
      </div>

      <Overlay isVisible={isOverlayVisible}>
        <DetailsCompare></DetailsCompare>
      </Overlay>
    </div>
  );
}

export default App;
