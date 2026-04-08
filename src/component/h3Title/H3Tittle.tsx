import React from "react";
import s from "./H3Title.module.css";

type H3TittleProps = {
  children: React.ReactNode
  style?: React.CSSProperties;
}

export const H3Tittle = ({ children, style } : H3TittleProps) => {
  return (
    <div className={s.h3Title} style={style}>
      {children}
    </div>
  );
};