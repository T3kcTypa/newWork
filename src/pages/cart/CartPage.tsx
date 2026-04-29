import { Header } from "../../layout/header/header.tsx";
import { Container } from "../../component/container/Container.tsx";
import { Footer } from "../../layout/footer/Footer.tsx";
import { PagePath } from "../../component/pagePath/PagePath.tsx";
import { Icon } from "../../component/icon/Icon.tsx";
import { Button } from "../../component/button/Button.tsx";
import { Count } from "../../component/count/Count.tsx";
import { paths } from "../../data/PathData.ts";
import lego from "../../images/10698_box1_na.png";
import dino from "../../images/dino.webp";
import s from "./CartPage.module.css";
import { useState } from "react";

const cartItems = [
  {
    id: 1,
    title: "LEGO Technic NASA Mars Perseverance Rover (42158)",
    meta: "Color: Multi | Size: Medium",
    price: 49.99,
    quantity: 2,
    image: lego,
  },
  {
    id: 2,
    title: "TOP BRIGHT Wooden Building Blocks for Toddlers 1-3",
    meta: "Color: Natural | Set: 100 pcs",
    price: 19.99,
    quantity: 1,
    image: dino,
  },
];

const shipping = 8.99;
const discount = 10;

const formatPrice = (value: number) => `$${value.toFixed(2)}`;

export const CartPage = () => {
  const [items, setItems] = useState(cartItems);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + shipping - discount;

  const changeQuantity = (id: number, step: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + step) } : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  return (
    <div className={s.page}>
      <Header />
      <main className={s.content}>
        <Container>
          <PagePath paths={paths.cart} />
          <div className={s.titleRow}>
            <div>
              <h1 className={s.heading}>Shopping Cart</h1>
            </div>
            <a className={s.continueLink} href="#">
              <Icon id="arrowLeft" width="18" height="18" fill="none" />
              Continue Shopping
            </a>
          </div>

          <div className={s.layout}>
            <section className={s.cartPanel} aria-label="Cart products">
              <div className={s.tableHead}>
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                <span></span>
              </div>

              {items.map((item) => (
                <article className={s.cartItem} key={item.id}>
                  <div className={s.product}>
                    <div className={s.productImage}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                      <h2 className={s.productTitle}>{item.title}</h2>
                      <p className={s.productMeta}>{item.meta}</p>
                    </div>
                  </div>

                  <div className={s.price}>{formatPrice(item.price)}</div>

                  <Count
                    className={s.quantity}
                    value={item.quantity}
                    min={1}
                    onDecrement={() => changeQuantity(item.id, -1)}
                    onIncrement={() => changeQuantity(item.id, 1)}
                  />

                  <div className={s.total}>{formatPrice(item.price * item.quantity)}</div>

                  <button className={s.remove} type="button" aria-label={`Remove ${item.title}`} onClick={() => removeItem(item.id)}>
                    <Icon id="trash" width="22" height="22" color="currentColor" fill="none" />
                  </button>
                </article>
              ))}

              <div className={s.cartActions}>
                <div className={s.coupon}>
                  <input type="text" aria-label="Coupon code" placeholder="Coupon code" />
                  <button type="button">Apply Coupon</button>
                </div>
              </div>
            </section>

            <aside className={s.summary} aria-label="Cart summary">
              <h2 className={s.summaryTitle}>Cart Totals</h2>
              <div className={s.summaryLine}>
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <div className={s.summaryLine}>
                <span>Shipping</span>
                <strong>{formatPrice(shipping)}</strong>
              </div>
              <div className={s.summaryLine}>
                <span>Discount</span>
                <strong>-{formatPrice(discount)}</strong>
              </div>
              <div className={s.summaryTotal}>
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <Button className={s.checkout}>Proceed to Checkout</Button>
              <p className={s.note}>Free shipping is available for orders over $100. Delivery details are confirmed at checkout.</p>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
