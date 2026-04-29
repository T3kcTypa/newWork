import { Header } from "../../layout/header/header.tsx";
import { Footer } from "../../layout/footer/Footer.tsx";
import { Container } from "../../component/container/Container.tsx";
import { PagePath } from "../../component/pagePath/PagePath.tsx";
import { Button } from "../../component/button/Button.tsx";
import { Icon } from "../../component/icon/Icon.tsx";
import { paths } from "../../data/PathData.ts";
import lego from "../../images/10698_box1_na.png";
import dino from "../../images/dino.webp";
import s from "./CheckoutPage.module.css";

const orderItems = [
  {
    id: 1,
    title: "LEGO Technic NASA Mars Perseverance Rover",
    price: 49.99,
    quantity: 2,
    image: lego,
  },
  {
    id: 2,
    title: "TOP BRIGHT Wooden Building Blocks",
    price: 19.99,
    quantity: 1,
    image: dino,
  },
];

const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const shipping = 8.99;
const discount = 10;
const tax = 4.99;
const total = subtotal + shipping + tax - discount;

const formatPrice = (value: number) => `$${value.toFixed(2)}`;

export const CheckoutPage = () => {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <Container>
          <PagePath paths={paths.checkout} />

          <div className={s.titleWrap}>
            <h1 className={s.title}>Checkout</h1>
          </div>

          <div className={s.checkoutGrid}>
            <section className={s.details} aria-label="Billing details">
              <div className={s.sectionHeader}>
                <span className={s.step}>01</span>
                <h2>Billing Details</h2>
              </div>

              <form className={s.form}>
                <div className={s.fieldGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" placeholder="Enter first name" />
                </div>
                <div className={s.fieldGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" placeholder="Enter last name" />
                </div>
                <div className={s.fieldGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="support@kidsdream.com" />
                </div>
                <div className={s.fieldGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" placeholder="+86 0387 42 42" />
                </div>
                <div className={`${s.fieldGroup} ${s.fullWidth}`}>
                  <label htmlFor="address">Street Address</label>
                  <input id="address" type="text" placeholder="123 Toy Street" />
                </div>
                <div className={s.fieldGroup}>
                  <label htmlFor="city">Town / City</label>
                  <input id="city" type="text" placeholder="Playland" />
                </div>
                <div className={s.fieldGroup}>
                  <label htmlFor="zip">Postcode / ZIP</label>
                  <input id="zip" type="text" placeholder="10001" />
                </div>
                <div className={`${s.fieldGroup} ${s.fullWidth}`}>
                  <label htmlFor="notes">Order Notes</label>
                  <textarea id="notes" placeholder="Notes about your order, delivery or gift wrapping" />
                </div>
              </form>

              <div className={s.payment}>
                <div className={s.sectionHeader}>
                  <span className={s.step}>02</span>
                  <h2>Payment Method</h2>
                </div>
                <label className={s.paymentOption}>
                  <input type="radio" name="payment" defaultChecked />
                  <span>
                    <strong>Credit / Debit Card</strong>
                    <small>Pay securely with Mastercard, Visa or Stripe.</small>
                  </span>
                </label>
                <label className={s.paymentOption}>
                  <input type="radio" name="payment" />
                  <span>
                    <strong>Paypal</strong>
                    <small>You will be redirected to Paypal after placing your order.</small>
                  </span>
                </label>
              </div>
            </section>

            <aside className={s.order} aria-label="Order summary">
              <div className={s.sectionHeader}>
                <span className={s.step}>03</span>
                <h2>Your Order</h2>
              </div>

              <div className={s.orderItems}>
                {orderItems.map((item) => (
                  <div className={s.orderItem} key={item.id}>
                    <div className={s.itemImage}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className={s.itemInfo}>
                      <h3>{item.title}</h3>
                      <span>Qty: {item.quantity}</span>
                    </div>
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                  </div>
                ))}
              </div>

              <div className={s.totals}>
                <div>
                  <span>Subtotal</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>
                <div>
                  <span>Shipping</span>
                  <strong>{formatPrice(shipping)}</strong>
                </div>
                <div>
                  <span>Tax</span>
                  <strong>{formatPrice(tax)}</strong>
                </div>
                <div>
                  <span>Discount</span>
                  <strong>-{formatPrice(discount)}</strong>
                </div>
                <div className={s.total}>
                  <span>Total</span>
                  <strong>{formatPrice(total)}</strong>
                </div>
              </div>

              <label className={s.terms}>
                <input type="checkbox" />
                <span>I have read and agree to the website terms and conditions.</span>
              </label>

              <Button className={s.placeOrder}>
                <Icon id="secondBag" fill="none" width="22" height="22" />
                Place Order
              </Button>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
