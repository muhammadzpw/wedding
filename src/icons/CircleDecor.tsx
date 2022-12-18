import React from "react";

interface CircleDecorProps {
  fill?: string;
  width?: number;
}

const CircleDecor: React.FC<CircleDecorProps> = ({
  fill = "#BC8544",
  width = 216,
}) => {
  return (
    <svg
      width={width}
      viewBox="0 0 216 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="128"
        cy="90"
        rx="88"
        ry="90"
        fill={fill}
        fillOpacity="0.43"
      />
      <ellipse
        cx="64"
        cy="89.5"
        rx="64"
        ry="65.5"
        fill={fill}
        fillOpacity="0.43"
      />
    </svg>
  );
};

export default CircleDecor;
