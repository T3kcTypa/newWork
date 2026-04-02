import s from "./RatingFilter.module.css";
import { RatingOption } from "../ratingOption/RatingOption";

const ratingOptions = [
  { id: 1, value: 4, selected: true },
  { id: 2, value: 3, selected: false },
  { id: 3, value: 2, selected: false },
  { id: 4, value: 1, selected: false },
];

export const RatingFilter = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h3 className={s.title}>Rating</h3>
        <span className={s.arrow}>⌃</span>
      </div>

      <div className={s.list}>
        {ratingOptions.map((option) => (
          <RatingOption
            key={option.id}
            value={option.value}
            selected={option.selected}
          />
        ))}
      </div>
    </div>
  );
};