import s from "./RatingFilter.module.css";
import { RatingOption } from "../ratingOption/RatingOption";
import { useState } from "react";
import { Text } from "../../../text/Text.tsx";

const ratingOptions = [
  { id: 1, value: 5, selected: true },
  { id: 2, value: 4, selected: false },
  { id: 3, value: 3, selected: false },
  { id: 4, value: 2, selected: false },
  { id: 5, value: 1, selected: false },
];

export const RatingFilter = () => {
  const [selectedRating, setSelectedRating] = useState<number>(5);
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Text style={{font: 'var(--text-categoriesTitle)', color: 'var(--color-gray-900);'}}>Rating</Text>
      </div>

      <div className={s.list}>
        {ratingOptions.map((option) => (
          <RatingOption
            key={option.id}
            value={option.value}
            selected={selectedRating === option.value}
            onClick={() => setSelectedRating(option.value)}
          />
        ))}
      </div>
    </div>
  );
};