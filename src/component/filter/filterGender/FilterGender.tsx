import s from "./FilterGender.module.css";
import { Text } from "../../text/Text.tsx";

const filterGender = [
  {id: 1, gender: 'Baby'},
  {id: 2, gender: 'Female'},
  {id: 3, gender: 'Male'},
]

export const Gender = () => {
  return (
    <div className={s.gender}>
      <div className={s.text}>
        <Text style={{font: 'var(--text-categoriesTitle)', color: 'var(--color-gray-900);'}}>Gender</Text>
      </div>
      <div className={s.items}>
        {filterGender.map((gender) => (
          <label key={gender.id}>
            <input type="checkbox" className={s.checkbox}/>
            {gender.gender}
          </label>
        ))}
      </div>
    </div>
  );
};