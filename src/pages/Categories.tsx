import { Header } from "../layout/header/header.tsx";
import { PagePath } from "../component/pagePath/PagePath.tsx";
import { FilterCategories } from "../component/filter/filterCategories/FilterCategories.tsx";

export const Categories = () => {
  return (
    <div>
      <Header/>
      <div className="container">
      <PagePath/>
        <FilterCategories/>
      </div>
    </div>
  );
};