import { ProductSales } from "../../component/product/productSales/ProductSales.tsx";
import { Text } from "../../component/text/Text.tsx";
import { Title } from "../../component/title/Title.tsx";
import { ProductRating } from "../../component/product/productRating/ProductRating.tsx";
import { ProductReviews } from "../../component/product/productReviews/ProductReviews.tsx";
import { Price } from "../../component/price/Price.tsx";
import { ColorOption } from "../../component/colorOption/ColorOption.tsx";
import { SizeOption } from "../../component/sizeOption/SizeOption.tsx";
import { Count } from "../../component/count/Count.tsx";
import { Button } from "../../component/button/Button.tsx";
import { ProductSlider } from "./productSlider/ProductSlider.tsx";
import { productDetail } from "../../data/Toys.ts";
import { useState } from "react";
import s from "./ProductDetails.module.css";

export const colors = [
  { id: 1, name: "Cyan", color: "#1af4ad" },
  { id: 4, name: "Blue", color: "#20c7f1" },
  { id: 5, name: "Green", color: "#adf54f" },
  { id: 6, name: "Brown", color: "#ffbc71" },
];

export const size = [
  { id: 1, size: 15 },
  { id: 2, size: 25 },
  { id: 3, size: 35 },
  { id: 4, size: 45 },
];

export const ProductDetails = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColorId, setSelectedColorId] = useState(colors[0].id);
  const [selectedSizeId, setSelectedSizeId] = useState(size[0].id);
  const activeImage = productDetail.images[activeImageIndex];

  const handleSelectImage = (image: string) => {
    const nextIndex = productDetail.images.indexOf(image);

    if (nextIndex !== -1) {
      setActiveImageIndex(nextIndex);
    }
  };

  const handlePreviousImage = () => {
    setActiveImageIndex((prevIndex) => {
      return prevIndex === 0 ? productDetail.images.length - 1 : prevIndex - 1;
    });
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) => {
      return prevIndex === productDetail.images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <div className={s.container}>
      <div className={s.image}>
        <div className={s.imageMain}>
          <img src={activeImage} alt="product" />
        </div>
        <div className={s.sliderBlock}>
          <ProductSlider
            images={productDetail.images}
            activeImage={activeImage}
            onSelectImage={handleSelectImage}
            onPreviousImage={handlePreviousImage}
            onNextImage={handleNextImage}
          />
        </div>
      </div>
      <div className={s.info}>
        <div className={s.infoSale}>
          <ProductSales style={{ position: "static" }} />
          <span className={s.infoWall}></span>
          <Text variant={"instock"}>INSTOCK</Text>
        </div>
        <div className={s.infoTitle}>
          <Title style={{ font: "var(--text-productDetailTitle)", color: "var(--color-gray-900)" }}>
            Stuffed Animals 6-inch Round Octopi Plush Toy
          </Title>
        </div>
        <div className={s.infoRating}>
          <ProductRating />
          <ProductReviews />
        </div>
        <div className={s.infoBlock}>
          <Price price={20} oldPrice={40} />
        </div>
        <div className={s.infoBlock}>
          <Text style={{ font: "var(--text-promoText)", color: "var(--color-gray-700)" }}>
            The Stuffed Animals 6-inch Round Octopi Plush Toy is a delightful addition to our children's toy collection,
            offering cuddly companionship and imaginative play with its adorable octopus design.
          </Text>
        </div>
        <div className={`${s.optionSection} ${s.infoBlock}`}>
          <div className={s.optionHeader}>
            <p className={s.optionLabel}>Color</p>
          </div>
          <div className={s.optionList}>
            {colors.map((item) => {
              return (
                <ColorOption
                  key={item.id}
                  name={item.name}
                  color={item.color}
                  isActive={item.id === selectedColorId}
                  onClick={() => setSelectedColorId(item.id)}
                />
              );
            })}
          </div>
        </div>
        <div className={`${s.optionSection} ${s.infoBlock}`}>
          <div className={s.optionHeader}>
            <p className={s.optionLabel}>Size</p>
          </div>
          <div className={s.optionList}>
            {size.map((item) => {
              return (
                <SizeOption
                  key={item.id}
                  size={item.size}
                  isActive={item.id === selectedSizeId}
                  onClick={() => setSelectedSizeId(item.id)}
                />
              );
            })}
          </div>
        </div>
        <div className={`${s.optionSection} ${s.infoBlock}`}>
          <div className={s.optionHeader}>
            <p className={s.optionLabel}>Quantity</p>
          </div>
          <div className={s.quantityWrap}>
            <Count />
          </div>
        </div>
        <div className={`${s.actionsSection} ${s.infoBlock}`}>
          <div className={s.actionsRow}>
            <Button className={s.productActionButton}>
              Buy Now
            </Button>
            <Button className={s.productActionButton}>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      <div className={s.description}>
        <div className={s.descriptionSection}>
          <Title
            style={{ font: "var(--fw-semibold) 2rem/1.2 var(--font-accent)", color: "var(--color-primary-darkBlue)" }}
          >
            Specification
          </Title>
          <ul className={s.specificationList}>
            <li className={s.specificationItem}>
              <span className={s.specificationLabel}>Country</span>
              <span className={s.specificationValue}>{productDetail.country}</span>
            </li>
            <li className={s.specificationItem}>
              <span className={s.specificationLabel}>Material</span>
              <span className={s.specificationValue}>{productDetail.Material}</span>
            </li>
            <li className={s.specificationItem}>
              <span className={s.specificationLabel}>Gender</span>
              <span className={s.specificationValue}>{productDetail.Gender}</span>
            </li>
            <li className={s.specificationItem}>
              <span className={s.specificationLabel}>Company</span>
              <span className={s.specificationValue}>{productDetail.Company}</span>
            </li>
          </ul>
        </div>
        <div className={s.descriptionSection}>
          <Title
            style={{ font: "var(--fw-semibold) 2rem/1.2 var(--font-accent)", color: "var(--color-primary-darkBlue)" }}
          >
            Description
          </Title>
          <p className={s.descriptionText}>{productDetail.Description}</p>
        </div>
      </div>
    </div>
  );
};
