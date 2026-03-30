import s from "./wish.module.css";
import { Icon } from "../icon/Icon.tsx";
import React from "react";

type WishProps = {
  style?: React.CSSProperties
}


export const Wish = ({ style } : WishProps) => {
  return (
    <div className={s.Wish} style={style}>
        <Icon id={"heart2"} color={"#1C274C"}/>
    </div>
  );
};