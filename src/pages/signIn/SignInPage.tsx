import { Header } from "../../layout/header/header.tsx";
import { Footer } from "../../layout/footer/Footer.tsx";
import { Container } from "../../component/container/Container.tsx";
import { PagePath } from "../../component/pagePath/PagePath.tsx";
import { Button } from "../../component/button/Button.tsx";
import { paths } from "../../data/PathData.ts";
import s from "./SignInPage.module.css";

const socialButtons = [
  { label: "Google", icon: "G" },
  { label: "Twitter", icon: "X" },
  { label: "Facebook", icon: "f" },
];

export const SignInPage = () => {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <Container>
          <PagePath paths={paths.signIn} />

          <section className={s.authWrap} aria-labelledby="sign-in-title">
            <div className={s.titleWrap}>
              <h1 id="sign-in-title" className={s.title}>Sign In</h1>
            </div>

            <div className={s.authCard}>
              <form className={s.form}>
                <div className={s.fieldGroup}>
                  <label htmlFor="signin-email">Email Address</label>
                  <input id="signin-email" type="email" placeholder="Enter your email" />
                </div>

                <div className={s.fieldGroup}>
                  <label htmlFor="signin-password">Password</label>
                  <input id="signin-password" type="password" placeholder="Enter your password" />
                </div>

                <div className={s.formOptions}>
                  <label className={s.remember}>
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#">Forgot Password?</a>
                </div>

                <Button className={s.signButton}>Sign In</Button>
              </form>

              <div className={s.divider}>
                <span>Or sign in with</span>
              </div>

              <div className={s.socials}>
                {socialButtons.map((item) => (
                  <button className={s.socialButton} type="button" key={item.label}>
                    <span className={s.socialIcon}>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>

              <p className={s.createText}>
                Do not have an account? <a href="#">Create Account</a>
              </p>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
