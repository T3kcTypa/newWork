import { Main } from "./layout/main/Main.tsx";
import { Section } from "./layout/section/Section.tsx";
import { SaleSection } from "./layout/salesSection/SaleSection.tsx";
import s from "./App.module.css"
import { NewToysArrivals } from "./layout/newToysArrivals/NewToysArrivals.tsx";
import { PromoSection } from "./component/promo/promoSection/PromoSection.tsx";
import { Set } from "./layout/set/Set.tsx";
import { Animal } from "./layout/animal/Animal.tsx";
import { Block } from "./layout/block/Block.tsx";

function App() {

  return (
    <div>
      <Main />
      <Section />
      <SaleSection />
      <div className={s.container}>
        <NewToysArrivals />
        <PromoSection/>
        <Set/>
        <Animal/>
        <Block/>
      </div>
    </div>
  );
}


export default App;
