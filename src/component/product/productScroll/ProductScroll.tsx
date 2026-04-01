import s from "./ProductScroll.module.css"


export const ProductScroll = () => {
  return (
    <div className={s.scroll}>
      <button className={s.activeScroll}></button>
      <button className={s.simpleScroll}></button>
      <button className={s.simpleScroll}></button>
    </div>
  );
};