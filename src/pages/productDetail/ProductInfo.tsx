import { Header } from "../../layout/header/header.tsx";
import { PagePath } from "../../component/pagePath/PagePath.tsx";
import { paths } from "../../data/PathData.ts";

export const ProductInfo = () => {
  return (
    <div>
      <Header />
      <div>
        <PagePath paths={paths.stuffed} />
      </div>
    </div>
  );
};