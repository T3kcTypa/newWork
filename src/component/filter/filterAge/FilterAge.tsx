import s from "./FilterAge.module.css";
import { Text } from "../../text/Text.tsx";

const Age = [
  {id: "0-6", age: "0-6", mix: 0, max: 6 },
  {id: "6-12", age: "6-12", mix: 6, max: 12 },
  {id: "13-36", age: "13-36", mix: 13, max: 36 },
  {id: "37-60", age: "37-60", mix: 37, max: 60 },
  {id: "61-84", age: "61-84", mix: 61, max: 84 }
]

export const FilterAge = () => {
  return (
    <div className={s.age}>
      <div className={s.text}>
        <Text style={{font: 'var(--text-categoriesTitle)', color: 'var(--color-gray-900);'}}>Age</Text>
      </div>
      <div className={s.items}>
        {Age.map((age) => (
          <label key={age.id}>
            <input type="checkbox" className={s.checkbox} />
            {age.age}
          </label>
        ))}
      </div>
    </div>
  );
};