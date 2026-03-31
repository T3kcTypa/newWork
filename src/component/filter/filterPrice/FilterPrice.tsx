import { Text } from "../../text/Text.tsx";
import s from "./FilterPrice.module.css"

const prices = [
  { id: "0-25", label: "$1 - $25", min: 1, max: 25 },
  { id: "25-50", label: "$25 - $50", min: 25, max: 50 },
  { id: "50-75", label: "$50 - $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 - $100", min: 75, max: 100 },
  { id: "100-200", label: "$100 - $200", min: 100, max: 200 },
  { id: "200+", label: "$200+", min: 200, max: Infinity },
];


export const FilterPrice = () => {
  return (
    <div className={s.price}>
      <div className={s.text}>
        <Text>Price</Text>
      </div>
      <div className={s.items}>
        {prices.map((price) => (
          <label key={price.id}>
            <input type="checkbox" />
            {price.label}
          </label>
        ))}
      </div>
    </div>
  );
};