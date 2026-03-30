import { SoftHugs } from "../promoCards/softHugsCard/SoftHugs.tsx";
import { CreativeWithWood } from "../promoCards/creativeWithWood/CreativeWithWood.tsx";
import { WithOff } from "../promoCards/withOff/WithOff.tsx";
import { ToyCar } from "../promoCards/toyCar/ToyCar.tsx";
import s from "./PromoSection.module.css"

export const PromoSection = () => {
  return (
    <div className={s.promo}>
      <SoftHugs/>
      <CreativeWithWood/>
      <WithOff/>
      <ToyCar/>
    </div>
  );
};