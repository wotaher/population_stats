/* eslint-disable react/prop-types */
import "./overlay.css";

export const Overlay = ({ isVisible = false, children }) => {
  return (
    <div className={`overlay ${isVisible ? "visible" : ""}`}>
      {isVisible ? children : null}
    </div>
  );
};
