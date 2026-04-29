import s from "./Count.module.css"
import { Icon } from "../icon/Icon.tsx";
import React from "react";


type CountProps = {
  className?: string
  style?: React.CSSProperties
  value?: number
  onIncrement?: () => void
  onDecrement?: () => void
  min?: number
}

export const Count = ({ className = "", style, value = 0, onIncrement, onDecrement, min } : CountProps) => {
  const isDecrementDisabled = min !== undefined && value <= min;

  return (
    <div className={`${s.Count} ${className}`.trim()} style={style}>
        <button className={s.button} type="button" onClick={onDecrement} disabled={isDecrementDisabled}>
          <Icon id="minus" color="#1C274C"/>
        </button>
        <span>
          {value}
        </span>
        <button className={s.button} type="button" onClick={onIncrement}>
          <Icon id="plus" color="#1C274C"/>
        </button>
    </div>
  );
};
