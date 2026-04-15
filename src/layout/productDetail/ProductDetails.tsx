import { ProductSales } from "../../component/product/productSales/ProductSales.tsx";
import { Text } from "../../component/text/Text.tsx";
import { Title } from "../../component/title/Title.tsx";
import { ProductRating } from "../../component/product/productRating/ProductRating.tsx";
import { ProductReviews } from "../../component/product/productReviews/ProductReviews.tsx";
import { Price } from "../../component/price/Price.tsx";

export const ProductDetails = () => {
  return (
    <div>
      <div>
        <div>
          <ProductSales />
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
          <div></div>
        </div>
      </div>
    </div>
  );
};
