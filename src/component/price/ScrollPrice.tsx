import s from "./ScrollPrice.module.css"

type OldPriceProps = {

  children?: React.ReactNode
}

export const ScrollPrice = ({ children } : OldPriceProps) => {
  return (
    <div className={s.scrollPrice}>
      {children}
    </div>
  );
};