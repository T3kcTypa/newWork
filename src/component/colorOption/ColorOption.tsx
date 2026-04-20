import React from "react";
import s from "./ColorOption.module.css";

export type ColorOptionProps = {
  name: string;
  color: string;
  isActive?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export const ColorOption = ({ name, color, isActive = false, onClick }: ColorOptionProps) => {
  return (
    <button type="button" className={`${s.block} ${isActive ? s.active : ""}`.trim()} onClick={onClick}>
      <span className={s.color} style={{ backgroundColor: color }}></span>
      <span className={s.text}>{name}</span>
    </button>
  );
};
