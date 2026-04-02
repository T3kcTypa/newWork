import s from "../filterPrice/FilterPrice.module.css";
import { Text } from "../../text/Text.tsx";

const filterGender = [
  {id: 1, gender: 'Baby'},
  {id: 2, gender: 'Female'},
  {id: 3, gender: 'Male'},
]

export const Gender = () => {
  return (
    <div className={s.price}>
      <div className={s.text}>
        <Text>Gender</Text>
      </div>
      <div className={s.items}>
        {filterGender.map((gender) => (
          <label key={gender.id}>
            <input type="checkbox" />
            {gender.gender}
          </label>
        ))}
      </div>
    </div>
  );
};