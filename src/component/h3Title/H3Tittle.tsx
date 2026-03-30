import React from "react";
import s from "./H3Title.module.css";

type H3TittleProps = {
  children: React.ReactNode
}

export const H3Tittle = ({ children } : H3TittleProps) => {
  return (
    <div className={s.h3Title}>
      {children}
    </div>
  );
};