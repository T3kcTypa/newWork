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
        <div>
          <ProductSales style={{ position: "relative" }} />
          <Text variant={"instock"}>INSTOCK</Text>
        </div>
        <div>
          <Title>Stuffed Animals 6-inch Round Octopi Plush Toy</Title>
        </div>
        <div>
          <ProductRating />
          <ProductReviews />
        </div>
        <div>
          <Price price={20} oldPrice={40} />
        </div>
        <div>
          <Text>
            The Stuffed Animals 6-inch Round Octopi Plush Toy is a delightful addition to our children's toy collection,
            offering cuddly companionship and imaginative play with its adorable octopus design.
          </Text>
        </div>
        <div>
          <p>Color</p>
          <div>
            {colors.map((item) => {
              return <ColorOption key={item.id} name={item.name} color={item.color} />;
            })}
          </div>
        </div>
        <div>
          <p>Size</p>
          <div>
            {size.map((item) => {
              return <SizeOption key={item.id} size={item.size} />;
            })}
          </div>
        </div>
        <div>
          <p>Quantity:</p>
          <Count style={{ position: "relative" }} />
        </div>
        <div>
          <Button>Buy Now</Button>
          <Button>Add To Cart</Button>
        </div>
      </div>
      <div className={s.description}>
        <Title>Specification</Title>
        <ul>
          <li>
            <p>Country: {productDetail.country}</p>
          </li>
          <li>
            <p>Material: {productDetail.Material}</p>
          </li>
          <li>
            <p>Gender: {productDetail.Gender}</p>
          </li>
          <li>
            <p>Company: {productDetail.Company}</p>
          </li>
        </ul>
        <div>
          <Title>Description</Title>
          <p>{productDetail.Description}</p>
        </div>
      </div>
    </div>
  );
};
