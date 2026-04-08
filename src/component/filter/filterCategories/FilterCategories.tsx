import { Text } from "../../text/Text.tsx";
import s from "./FilterCategories.module.css"

const categories = [
  { id: "lego", label: "Lego Set" },
  { id: "sand", label: "Sand and Water Tables" },
  { id: "drum", label: "Drum Set" },
  { id: "guitar", label: "Guitar" },
  { id: "trains", label: "Trains and Train Sets" },
  { id: "airplane", label: "Model Airplane" },
  { id: "building", label: "Building Set" },
  { id: "telescope", label: "Refraction Telescope" },
  { id: "puzzle", label: "Jigsaw Puzzle" },
  { id: "paint", label: "Paint Tool" },
  { id: "animal", label: "Stuffed Animal" },
  { id: "action", label: "Action Figures" }
];


export const FilterCategories = () => {
  return (
    <div className={s.categories}>
      <div className={s.text}>
        <Text style={{font: 'var(--text-categoriesTitle)', color: 'var(--color-gray-900);'}}>Categories</Text>
      </div>
      <div className={s.items}>
        {categories.map((item) => (
          <label key={item.id} className={s.font}>
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};