import { Header } from "../../layout/header/header.tsx";
import { PagePath } from "../../component/pagePath/PagePath.tsx";
import { FilterCategories } from "../../component/filter/filterCategories/FilterCategories.tsx";
import { FilterPrice } from "../../component/filter/filterPrice/FilterPrice.tsx";
import { FilterAge } from "../../component/filter/filterAge/FilterAge.tsx";
import { Gender } from "../../component/filter/filterGender/FilterGender.tsx";
import { RatingFilter } from "../../component/filter/filterRaiting/ratingFilter/RatingFilter.tsx";
import { ProductList } from "../../layout/productList/ProductList.tsx";
import s from "./Categories.module.css";
import { ProductTitle } from "../../layout/productTitle/ProductTitle.tsx";
import { Pagination } from "../../component/pagination/Pagination.tsx";
import { Footer } from "../../layout/footer/Footer.tsx";

export const Categories = () => {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <PagePath />
        <div className={s.flex}>
          <div className={s.filter}>
            <FilterCategories />
            <FilterPrice />
            <FilterAge />
            <Gender />
            <RatingFilter />
          </div>
          <div className={s.title}>
            <ProductTitle />
            <ProductList />
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};