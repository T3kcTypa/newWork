import { Home } from "./pages/home/Home.tsx";
import { Categories } from "./pages/categories/Categories.tsx";
import { ProductInfo } from "./pages/productDetail/ProductInfo.tsx";
import { ProductDetails } from "./layout/productDetail/ProductDetails.tsx";
import { CartPage } from "./pages/cart/CartPage.tsx";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.tsx";
import { OrderCompletePage } from "./pages/orderComplete/OrderCompletePage.tsx";
import { CompareProductPage } from "./pages/compareProduct/CompareProductPage.tsx";
import { SignInPage } from "./pages/signIn/SignInPage.tsx";
import { SignUpPage } from "./pages/signUp/SignUpPage.tsx";

function App() {
  return (
    <div>
      <Home />
      <Categories />
      <ProductInfo />
      <ProductDetails />
      <CartPage />
      <CheckoutPage />
      <OrderCompletePage />
      <CompareProductPage />
      <SignInPage />
      <SignUpPage />
    </div>
  );
}

export default App;
