import { Main } from "./layout/main/Main.tsx";
import { Section } from "./layout/section/Section.tsx";
import { SaleSection } from "./layout/salesSection/SaleSection.tsx";
import s from "./App.module.css"
import { NewToysArrivals } from "./layout/newToysArrivals/NewToysArrivals.tsx";

function App() {

  return (
    <div>
      <Main />
      <Section />
      <SaleSection />
      <div className={s.container}>
        <NewToysArrivals />
      </div>
    </div>
  );
}


export default App;
