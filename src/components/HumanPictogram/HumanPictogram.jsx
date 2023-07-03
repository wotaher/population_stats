/* eslint-disable react/prop-types */
import HumanIcon from "./../../assets/human.png";
import "./HumanPictogram.css";

const HumanPictogramIcon = ({ widthPercent }) => {
  const pictogramWidth = 20; // meh :(

  return (
    <div
      className="icon-container"
      style={
        Number.isFinite(widthPercent)
          ? { width: `${pictogramWidth * widthPercent}px` }
          : undefined
      }
    >
      <img src={HumanIcon} alt="human" className="human-icon" />
    </div>
  );
};

export const HumanPictogram = ({ count, lastWidthPercent }) => {
  return (
    <div className={"human-pictogram-container"}>
      {Array.from({ length: count }, (_, index) => {
        const isLast = index + 1 === count;

        return (
          <HumanPictogramIcon
            key={index}
            widthPercent={
              lastWidthPercent && isLast ? lastWidthPercent : undefined
            }
          ></HumanPictogramIcon>
        );
      })}
    </div>
  );
};
