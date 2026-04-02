
import { Home } from "./pages/Home.tsx";
import { Categories } from "./pages/Categories.tsx";
import { FilterPrice } from "./component/filter/filterPrice/FilterPrice.tsx";
import { FilterAge } from "./component/filter/filterAge/FilterAge.tsx";
import { Gender } from "./component/filter/filterGender/FilterGender.tsx";
import { RatingFilter } from "./component/filter/filterRaiting/ratingFilter/RatingFilter.tsx";
import { ProductList } from "./component/productList/ProductList.tsx";

function App() {

  return (
    <div>
      <Home/>
      {/*<Categories/>*/}
      {/*<FilterPrice/>*/}
      {/*<Home/>*/}
      <Categories/>
      <FilterPrice/>
      <FilterAge/>
      <Gender/>
      <RatingFilter/>
      <ProductList/>
    </div>
  );
}


export default App;
