import { Home } from "./pages/home/Home.tsx";
import { Categories } from "./pages/categories/Categories.tsx";
import { ProductInfo } from "./pages/productDetail/ProductInfo.tsx";
import { ProductDetails } from "./layout/productDetail/ProductDetails.tsx";

function App() {
  return (
    <div>
      <Home />
      <Categories />
      <ProductInfo />
      <ProductDetails />
    </div>
  );
}

export default App;
