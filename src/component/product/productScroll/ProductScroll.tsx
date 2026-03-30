import s from "./ProductScroll.module.css"


export const ProductScroll = () => {
  return (
    <div className={s.scroll}>
      <span className={s.activeScroll}></span>
      <span className={s.simpleScroll}></span>
      <span className={s.simpleScroll}></span>
    </div>
  );
};