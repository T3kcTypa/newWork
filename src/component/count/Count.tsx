import s from "./Count.module.css"
import { Icon } from "../icon/Icon.tsx";
import React from "react";


type CountProps = {
  style?: React.CSSProperties
}

export const Count = ({ style } : CountProps) => {
  return (
    <div className={s.Count} style={style}>
        <span>
          <Icon id="minus" color="#1C274C"/>
        </span>
        <span>
          0
        </span>
        <span>
          <Icon id="plus" color="#1C274C"/>
        </span>
    </div>
  );
};