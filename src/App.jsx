import "./App.css";
import { Overlay } from "./components/Overlay/Overlay";
import { WorldMap } from "./components/WorldMap/WorldMap";
import { useOverlay } from "./store/comparator/hooks";
import { DetailsCompare } from "./components/DetailsCompare/DetailsCompare";

function App() {
  const isOverlayVisible = useOverlay();

  return (
    <div>
      <div style={{ width: "1220px" }}>
        <WorldMap></WorldMap>
      </div>

      <Overlay isVisible={isOverlayVisible}>
        <DetailsCompare></DetailsCompare>
      </Overlay>
    </div>
  );
}

export default App;
