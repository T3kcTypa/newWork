import React from "react";
import s from "./button.module.css";

type ButtonProps = {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export const Button = ({ className = "", style, children } : ButtonProps) => {
  return (
    <button style={style} className={`${s.buttonStyle} ${className}`.trim()}>
      {children}
    </button>
  );
};
