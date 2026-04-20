import s from "./ProductGallery.module.css";

export type ProductGalleryProps = {
  image: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const ProductGallery = ({ image, isActive = false, onClick }: ProductGalleryProps) => {
  return (
    <div className={s.thumbWrap}>
      <button
        type="button"
        className={`${s.thumbButton} ${isActive ? s.active : ""}`.trim()}
        onClick={onClick}
        aria-label="Select product image"
      >
        <img className={s.thumbImage} src={image} alt="Фото товара" />
      </button>
    </div>
  );
};
