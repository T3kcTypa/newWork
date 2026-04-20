import s from "./wish.module.css";
import { Icon } from "../icon/Icon.tsx";
import React from "react";

type WishProps = {
  className?: string
  style?: React.CSSProperties
}


export const Wish = ({ className = "", style } : WishProps) => {
  return (
    <div className={`${s.Wish} ${className}`.trim()} style={style}>
        <Icon id={"heart2"} color={"#1C274C"}/>
    </div>
  );
};
