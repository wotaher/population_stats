/* eslint-disable react/prop-types */
import "./overlay.css";
import { useDispatch } from "react-redux";
import { clearCompare } from "../../store/comparator";
import CloseIcon from "./../../assets/close.svg";

export const Overlay = ({ isVisible = false, children }) => {
  const dispatch = useDispatch();

  const onCloseClick = () => {
    dispatch(clearCompare());
  };

  return (
    <div className={`overlay ${isVisible ? "visible" : ""}`}>
      <div className="close">
        <button onClick={onCloseClick}>
          <img src={CloseIcon} alt="close" />
        </button>
      </div>
      {children}
    </div>
  );
};
