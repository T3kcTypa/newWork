import s from "./Text.module.css"
import React from "react";

type TextProps = {
  style?: React.CSSProperties
  children: React.ReactNode
  variant?: "instock" | "outstock"
}

export const Text = ({ children, style, variant }: TextProps) => {
  return (
    <div className={`${s.text} ${variant ? s[variant] : ""}`.trim()} style={style}>
      <p>{children}</p>
    </div>
  );
};
