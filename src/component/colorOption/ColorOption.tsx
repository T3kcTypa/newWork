import React from "react";
import s from "./ColorOption.module.css";

export type ColorOptionProps = {
  name: string;
  color: string;
  style?: React.CSSProperties;
};

export const ColorOption = ({ name, color }: ColorOptionProps) => {
  return (
    <div className={s.block}>
      <p className={s.text}>{name}</p>
      <div className={s.color} style={{ backgroundColor: color }}></div>
    </div>
  );
};
