export const defaultStyleCircleBar = {
  strokeLinecap: "butt",
  textSize: "40px",
  pathTransitionDuration: 0.5,
  textColor: "#042C5C",
  trailColor: "#fff",
  backgroundColor: "#3e98c7",
};

export const circleColor = (day) =>
  day <= 14 ? `rgba(253, 99, 99, ${day / 1})` : `rgba(0, 71, 201, ${day / 1})`;
