import { Header } from "../../layout/header/header.tsx";
import { Footer } from "../../layout/footer/Footer.tsx";
import { Container } from "../../component/container/Container.tsx";
import { PagePath } from "../../component/pagePath/PagePath.tsx";
import { Button } from "../../component/button/Button.tsx";
import { Icon } from "../../component/icon/Icon.tsx";
import { paths } from "../../data/PathData.ts";
import lego from "../../images/10698_box1_na.png";
import dino from "../../images/dino.webp";
import s from "./CompareProductPage.module.css";

const products = [
  {
    id: 1,
    title: "LEGO Technic NASA Mars Perseverance Rover",
    image: lego,
    price: "$49.99",
    rating: "4.8 / 5",
    availability: "In Stock",
    material: "Plastic",
    age: "9+ Years",
    brand: "Kids Dream",
    category: "Building Blocks",
  },
  {
    id: 2,
    title: "TOP BRIGHT Wooden Building Blocks",
    image: dino,
    price: "$19.99",
    rating: "4.6 / 5",
    availability: "In Stock",
    material: "Wood",
    age: "1-3 Years",
    brand: "Kids Dream",
    category: "Educational Toys",
  },
  {
    id: 3,
    title: "Stuffed Animals 6-inch Round Plush Toy",
    image: dino,
    price: "$20.00",
    rating: "4.7 / 5",
    availability: "In Stock",
    material: "Soft Plush",
    age: "3+ Years",
    brand: "Kids Dream",
    category: "Stuffed Animals",
  },
];

const rows = [
  { label: "Price", key: "price" },
  { label: "Rating", key: "rating" },
  { label: "Availability", key: "availability" },
  { label: "Material", key: "material" },
  { label: "Age", key: "age" },
  { label: "Brand", key: "brand" },
  { label: "Category", key: "category" },
] as const;

export const CompareProductPage = () => {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <Container>
          <PagePath paths={paths.compare} />

          <div className={s.titleWrap}>
            <h1 className={s.title}>Compare Product</h1>
          </div>

          <section className={s.comparePanel} aria-label="Product comparison">
            <div className={s.productRow}>
              <div className={s.labelCell}>Product</div>
              {products.map((product) => (
                <article className={s.productCard} key={product.id}>
                  <button className={s.remove} type="button" aria-label={`Remove ${product.title}`}>
                    <Icon id="trash" width="20" height="20" color="currentColor" fill="none" />
                  </button>
                  <div className={s.imageBox}>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <h2>{product.title}</h2>
                  <Button className={s.addButton}>
                    <Icon id="groceryCart" width="20" height="20" color="currentColor" fill="none" />
                    Add To Cart
                  </Button>
                </article>
              ))}
            </div>

            <div className={s.table}>
              {rows.map((row) => (
                <div className={s.compareRow} key={row.key}>
                  <div className={s.labelCell}>{row.label}</div>
                  {products.map((product) => (
                    <div className={s.valueCell} key={`${product.id}-${row.key}`}>
                      {product[row.key]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
