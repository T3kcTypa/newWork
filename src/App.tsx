
import { Home } from "./pages/home/Home.tsx";
import { Categories } from "./pages/categories/Categories.tsx";
import { ProductInfo } from "./pages/productDetail/ProductInfo.tsx";

function App() {
  return (
    <div>
      <Home />
      <Categories />
      <ProductInfo/>
    </div>
  );
}

export default App;
