import React from "react";

type IconProps = {
  name: string;
  size?: number;
};

export const Icon: React.FC<IconProps> = ({ name, size = 24 }) => (
  <span
    style={{
      display: "inline-block",
      width: size,
      height: size,
      fontSize: size,
      textAlign: "center",
      lineHeight: `${size}px`,
      userSelect: "none",
    }}
    aria-label={name}
  >
    {/* Replace this with your icon font or SVG logic */}
    {name === "chat" && <svg width={size} height={size}><circle cx={size/2} cy={size/2} r={size/2 - 2} fill="#222" /></svg>}
    {name !== "chat" && name}
  </span>
);