import { Icon } from "../icon/Icon.tsx";
import s from "./PagePath.module.css"

export type PathItem = {
  label: string,
  href?: string,
}

export type PagePathProps = {
  paths: PathItem[]
}


export const PagePath = ({ paths }: PagePathProps) => {
  return (
    <nav className={s.nav}>
      {paths.map((item, index) => {
        const isLast = index === paths.length - 1;

        return (
          <span key={index} className={s.item}>
            {item.href && !isLast ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}

            {!isLast && (
              <span className={s.icon}>
                <Icon id="arrowRight" fill="none" width="17" height="17" />
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
};