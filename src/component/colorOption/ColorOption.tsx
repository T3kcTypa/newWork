import React from "react";

export const colors = [
  { id: 1, name: "Cyan", color: "#1af4ad" },
  { id: 4, name: "Blue", color: "#20c7f1" },
  { id: 5, name: "Green", color: "#adf54f" },
  { id: 6, name: "Brown", color: "#ffbc71" },
];

export type ColorOptionProps = {
  name: string;
  color: string;
  style?: React.CSSProperties;
};

export const ColorOption = ({ name, color }: ColorOptionProps) => {
  return (
    <div>
      <p>{name}</p>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
};
