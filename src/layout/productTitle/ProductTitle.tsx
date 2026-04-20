
import { Text } from "../../component/text/Text.tsx";
import { ShowingResults } from "../../component/showingResults/ShowingResults.tsx";
import { SortButton } from "../../component/sortButton/SortButton.tsx";
import s from "./ProductTitle.module.css"
import { H3Tittle } from "../../component/h3Title/H3Tittle.tsx";


export const ProductTitle = () => {
  return (
    <div className={s.title}>
      <H3Tittle style={{margin: "0 0", justifyContent: 'flex-start'}}>Lego Sets</H3Tittle>
      <div className={s.subtitle}>
        <Text style={{
          fontFamily: "var(--font-secondary)",
          fontWeight: "var(--fw-regular)",
          fontSize: "1rem",
          color: "var(--color-gray-700)",
          lineHeight: "150%",
        }} >Building Dreams, One Brick at a Time: Explore our Lego Collection!</Text>
      </div>
      <div className={s.sort}>
        <ShowingResults />
        <SortButton />
      </div>
      <div className={s.mobileControls}>
        <button type="button" className={s.mobileControlButton}>Filter</button>
        <button type="button" className={s.mobileControlButton}>Sorting</button>
      </div>
    </div>
  );
};
