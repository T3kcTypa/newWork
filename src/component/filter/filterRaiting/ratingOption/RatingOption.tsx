import s from "./RatingOption.module.css";
import { StarsRating } from "../starsRating/StarsRating";

type RatingOptionProps = {
  value: number;
  selected?: boolean;
  onClick?: () => void;
};

export const RatingOption = ({
                               value,
                               selected = false,
                               onClick,
                             }: RatingOptionProps) => {
  return (
    <button className={s.row} onClick={onClick} type="button">
      <span className={`${s.circle} ${selected ? s.circleActive : ""}`} />
      <StarsRating value={value} />
    </button>
  );
};