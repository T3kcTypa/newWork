import s from "../../App.module.css";
import { Section } from "../../layout/section/Section.tsx";
import { SaleSection } from "../../layout/salesSection/SaleSection.tsx";
import { NewToysArrivals } from "../../layout/newToysArrivals/NewToysArrivals.tsx";
import { PromoSection } from "../../component/promo/promoSection/PromoSection.tsx";
import { Set } from "../../layout/set/Set.tsx";
import { Animal } from "../../layout/animal/Animal.tsx";
import { Block } from "../../layout/block/Block.tsx";
import { Footer } from "../../layout/footer/Footer.tsx";
import { Header } from "../../layout/header/header.tsx";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <Section />
        <SaleSection />
        <NewToysArrivals />
        <PromoSection />
        <Set />
        <Animal />
        <Block />
      </div>
      <Footer/>
    </div>
  );
};