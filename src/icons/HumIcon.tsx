import React from "react";

interface HumIconProps {
  fill: string;
  width?: number;
}

const HumIcon: React.FC<HumIconProps> = ({ fill, width = 24 }) => {
  return (
    <svg width={width} viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="0.5" x2="24" y2="0.5" stroke={fill} />
      <line y1="5.5" x2="16" y2="5.5" stroke={fill} />
    </svg>
  );
};

export default HumIcon;
