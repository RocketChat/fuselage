import React from "react";

type IconProps = {
  name: string;
  size?: number;
  onClick?: () => void;
  color?: string;
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, onClick, color }) => (
  <span
    style={{
      display: "inline-block",
      width: size,
      height: size,
      fontSize: size,
      textAlign: "center",
      lineHeight: `${size}px`,
      userSelect: "none",
      cursor: onClick ? "pointer" : "default",
      color: color || "currentColor",
    }}
    aria-label={name}
    onClick={onClick}
  >
    {/* Replace this with your icon font or SVG logic */}
    {name === "chat" && <svg width={size} height={size}><circle cx={size/2} cy={size/2} r={size/2 - 2} fill="#222" /></svg>}
    {name === "eye" && (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    )}
    {name === "eye-off" && (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
      </svg>
    )}
    {name === "chevron-down" && (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
      </svg>
    )}
    {name === "chevron-up" && (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41-1.41z"/>
      </svg>
    )}
    {name === "arrow-left" && (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 12H5m7-7l-7 7 7 7"/>
      </svg>
    )}
    {name === "phone" && (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )}
    {name === "user" && (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    )}
    {name !== "chat" && name !== "eye" && name !== "eye-off" && name !== "chevron-down" && name !== "chevron-up" && name !== "arrow-left" && name !== "phone" && name !== "user" && name}
  </span>
);