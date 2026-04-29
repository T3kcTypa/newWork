import { Header } from "../../layout/header/header.tsx";
import { Footer } from "../../layout/footer/Footer.tsx";
import { Container } from "../../component/container/Container.tsx";
import { PagePath } from "../../component/pagePath/PagePath.tsx";
import { Button } from "../../component/button/Button.tsx";
import { Icon } from "../../component/icon/Icon.tsx";
import { paths } from "../../data/PathData.ts";
import lego from "../../images/10698_box1_na.png";
import dino from "../../images/dino.webp";
import kidsOrder from "../../images/Kids Order.webp";
import s from "./OrderCompletePage.module.css";

const orderItems = [
  {
    id: 1,
    title: "LEGO Technic NASA Mars Perseverance Rover",
    quantity: 2,
    total: 99.98,
    image: lego,
  },
  {
    id: 2,
    title: "TOP BRIGHT Wooden Building Blocks",
    quantity: 1,
    total: 19.99,
    image: dino,
  },
];

const orderInfo = [
  { label: "Order Number", value: "#KD-240128" },
  { label: "Date", value: "April 28, 2026" },
  { label: "Total", value: "$123.96" },
  { label: "Payment Method", value: "Credit / Debit Card" },
];

export const OrderCompletePage = () => {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <Container>
          <PagePath paths={paths.orderComplete} />

          <section className={s.hero} aria-labelledby="order-complete-title">
            <div className={s.heroImage}>
              <img src={kidsOrder} alt="Completed toy order" />
            </div>
            <h1 id="order-complete-title" className={s.title}>Order Complete</h1>
            <p className={s.message}>Thank you for your purchase. Your order has been received and is now being prepared with care.</p>
          </section>

          <section className={s.infoGrid} aria-label="Order information">
            {orderInfo.map((item) => (
              <div className={s.infoCard} key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </section>

          <div className={s.contentGrid}>
            <section className={s.orderDetails} aria-label="Order details">
              <div className={s.sectionTitle}>
                <span className={s.step}>01</span>
                <h2>Order Details</h2>
              </div>

              <div className={s.items}>
                {orderItems.map((item) => (
                  <article className={s.item} key={item.id}>
                    <div className={s.itemImage}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className={s.itemText}>
                      <h3>{item.title}</h3>
                      <span>Quantity: {item.quantity}</span>
                    </div>
                    <strong>${item.total.toFixed(2)}</strong>
                  </article>
                ))}
              </div>

              <div className={s.totals}>
                <div>
                  <span>Subtotal</span>
                  <strong>$119.97</strong>
                </div>
                <div>
                  <span>Shipping</span>
                  <strong>$8.99</strong>
                </div>
                <div>
                  <span>Tax</span>
                  <strong>$4.99</strong>
                </div>
                <div>
                  <span>Discount</span>
                  <strong>-$10.00</strong>
                </div>
                <div className={s.total}>
                  <span>Total</span>
                  <strong>$123.96</strong>
                </div>
              </div>
            </section>

            <aside className={s.delivery} aria-label="Delivery information">
              <div className={s.sectionTitle}>
                <span className={s.step}>02</span>
                <h2>Delivery</h2>
              </div>

              <div className={s.deliveryCard}>
                <h3>Shipping Address</h3>
                <p>123 Toy Street, Playland, 10001</p>
              </div>

              <div className={s.deliveryCard}>
                <h3>Estimated Delivery</h3>
                <p>3-7 business days after order confirmation.</p>
              </div>

              <div className={s.actions}>
                <Button className={s.primaryAction}>
                  <Icon id="groceryCart" width="22" height="22" color="currentColor" fill="none" />
                  Continue Shopping
                </Button>
                <Button
                  className={s.secondaryAction}
                  style={{
                    backgroundColor: "var(--color-primary-darkBlue)",
                  }}
                >
                  Track Order
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
