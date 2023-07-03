/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const CountingAnimation = ({
  startValue = 1,
  endValue,
  duration,
  format,
}) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    let startTime = null;
    let progress = 0;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const timeElapsed = timestamp - startTime;
      progress = Math.min(timeElapsed / duration, 1);

      const nextCount = Math.round(
        startValue + (endValue - startValue) * progress
      );
      setCount(nextCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [startValue, endValue, duration]);

  return <span>{format ? format(count) : count}</span>;
};
