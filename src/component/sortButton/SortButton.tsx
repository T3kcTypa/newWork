import { Icon } from "../icon/Icon.tsx";
import s from "./SortButton.module.css"


export const SortButton = () => {
  return (
    <div>
      <button className={s.button}>
        Default Sorting
        <Icon id="arrowDown" fill='none' />
      </button>
    </div>
  );
};