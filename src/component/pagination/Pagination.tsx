import { useState } from "react";
import s from "./Pagination.module.css";
import { Icon } from "../icon/Icon.tsx";

export const Pagination = () => {
  const [active, setActive] = useState(1);

  const pages = [1, 2, 3, 4];

  return (
    <div className={s.wrapper}>
      {/* LEFT */}
      <button className={s.arrow}><Icon id="arrowLeft" fill='none' width='1rem' height='1rem'/></button>

      {/* NUMBERS */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setActive(page)}
          className={`${s.page} ${active === page ? s.active : ""}`}
        >
          {page}
        </button>
      ))}

      <span className={s.dots}>...</span>

      <button
        onClick={() => setActive(25)}
        className={`${s.page} ${active === 25 ? s.active : ""}`}
      >
        25
      </button>

      {/* RIGHT */}
      <button className={s.arrow}><Icon id="arrowRight" fill='none' width='1rem' height='1rem'/></button>
    </div>
  );
};