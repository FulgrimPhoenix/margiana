import { Carousel, ProductList } from "@/components";
import clsx from "clsx";
import { DetailedHTMLProps, DetailsHTMLAttributes, FC } from "react";
import style from "./Main.module.scss";
import { Link } from "react-router-dom";

const Main: FC<
  DetailedHTMLProps<DetailsHTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return (
    <div className={clsx(style["main-page"])} {...props}>
      <Carousel />
      <div className={clsx(style["block-title-container"])}>
        <h3 className={clsx(style["block-title"])}>Новинки</h3>
        <Link to="/shop" className={clsx(style["block-title-link"])}>
          Показать всё
        </Link>
      </div>
      <ProductList limit={4} />
    </div>
  );
};

export default Main;
