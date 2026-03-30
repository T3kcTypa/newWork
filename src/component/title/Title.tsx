import React from "react";
import s from "./title.module.css";

type TitleProps = {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  style?: React.CSSProperties
}


export const Title = ({ as: Tag = "h1", children, style }: TitleProps) => {
  return (
    <div className={s.title}>
      <Tag style={style}>
        {children}
      </Tag>
    </div>
  );
};