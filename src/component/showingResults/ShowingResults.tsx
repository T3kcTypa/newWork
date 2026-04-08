import { useState } from "react";
import s from "./ShowingResults.module.css";

export const ShowingResults = () => {
  const total = 225;

  const [visibleCount, setVisibleCount] = useState(20);

  return (
    <div className={s.showing}>

      {/* ТЕКСТ */}
      <p>
        Showing 1 - {visibleCount} of {total} results
      </p>

      {/* КНОПКИ */}
      <div className={s.button}>
        <button onClick={() => setVisibleCount(20)}
                className={visibleCount === 20 ? s.active : ""}>20
        </button>

        <button onClick={() => setVisibleCount(40)}
                className={visibleCount === 40 ? s.active : ""}>40
        </button>

        <button onClick={() => setVisibleCount(60)}
                className={visibleCount === 60 ? s.active : ""}>60
        </button>

        <button onClick={() => setVisibleCount(total)}
                className={visibleCount === total ? s.active : ""}>All
        </button>
      </div>

    </div>
  );
};