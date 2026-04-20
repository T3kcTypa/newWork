import { ProductGallery } from "../productGalary/ProductGallery.tsx";
import s from "./ProductSlider.module.css";

type ProductSliderProps = {
  images: string[];
  activeImage: string;
  onSelectImage: (image: string) => void;
  onPreviousImage: () => void;
  onNextImage: () => void;
};

export const ProductSlider = ({
  images,
  activeImage,
  onSelectImage,
  onPreviousImage,
  onNextImage,
}: ProductSliderProps) => {
  return (
    <div className={s.slider}>
      <div className={s.arrowWrap}>
        <button type="button" className={s.arrowButton} aria-label="Previous image" onClick={onPreviousImage}>
          <svg
            className={s.arrowIcon}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 5L9 12L15 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={s.galleryList}>
        {images.map((item, index) => {
          return (
            <ProductGallery
              key={index}
              image={item}
              isActive={item === activeImage}
              onClick={() => onSelectImage(item)}
            />
          );
        })}
      </div>

      <div className={s.arrowWrap}>
        <button type="button" className={s.arrowButton} aria-label="Next image" onClick={onNextImage}>
          <svg
            className={s.arrowIcon}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 5L15 12L9 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
