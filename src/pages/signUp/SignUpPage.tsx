import { Header } from "../../layout/header/header.tsx";
import { Footer } from "../../layout/footer/Footer.tsx";
import { Container } from "../../component/container/Container.tsx";
import { PagePath } from "../../component/pagePath/PagePath.tsx";
import { Button } from "../../component/button/Button.tsx";
import { paths } from "../../data/PathData.ts";
import s from "./SignUpPage.module.css";

const socialButtons = [
  { label: "Google", icon: "G" },
  { label: "Twitter", icon: "X" },
  { label: "Facebook", icon: "f" },
];

export const SignUpPage = () => {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <Container>
          <PagePath paths={paths.signUp} />

          <section className={s.authWrap} aria-labelledby="create-account-title">
            <div className={s.titleWrap}>
              <h1 id="create-account-title" className={s.title}>Create Account</h1>
            </div>

            <div className={s.authCard}>
              <form className={s.form}>
                <div className={s.nameGrid}>
                  <div className={s.fieldGroup}>
                    <label htmlFor="signup-first-name">First Name</label>
                    <input id="signup-first-name" type="text" placeholder="Enter first name" />
                  </div>
                  <div className={s.fieldGroup}>
                    <label htmlFor="signup-last-name">Last Name</label>
                    <input id="signup-last-name" type="text" placeholder="Enter last name" />
                  </div>
                </div>

                <div className={s.fieldGroup}>
                  <label htmlFor="signup-email">Email Address</label>
                  <input id="signup-email" type="email" placeholder="Enter your email" />
                </div>

                <div className={s.fieldGroup}>
                  <label htmlFor="signup-password">Password</label>
                  <input id="signup-password" type="password" placeholder="Create password" />
                </div>

                <div className={s.fieldGroup}>
                  <label htmlFor="signup-confirm-password">Confirm Password</label>
                  <input id="signup-confirm-password" type="password" placeholder="Confirm password" />
                </div>

                <label className={s.terms}>
                  <input type="checkbox" />
                  <span>I agree to the terms and privacy policy.</span>
                </label>

                <Button className={s.createButton}>Create Account</Button>
              </form>

              <div className={s.divider}>
                <span>Or sign up with</span>
              </div>

              <div className={s.socials}>
                {socialButtons.map((item) => (
                  <button className={s.socialButton} type="button" key={item.label}>
                    <span className={s.socialIcon}>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>

              <p className={s.signInText}>
                Already have an account? <a href="#">Sign In</a>
              </p>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
