import { Header } from "../../layout/header/header.tsx";
import { PagePath } from "../../component/pagePath/PagePath.tsx";
import { paths } from "../../data/PathData.ts";
import s from "./ProductInfo.module.css";

export const ProductInfo = () => {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <PagePath paths={paths.stuffed} />
      </div>
    </div>
  );
};
