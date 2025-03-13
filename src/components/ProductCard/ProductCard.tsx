import clsx from "clsx";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { IProduct } from "types/product.type";
import style from "./ProductCard.module.scss";

interface IProductCard
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  product: IProduct;
}

const ProductCard: FC<IProductCard> = ({ product, ...props }) => {
  return (
    <li className={clsx(style["product-card"])} {...props}>
      <img
        src={product.photos[0]}
        className={clsx(style["photo"])}
        alt="фото товара"
      />
      <h3 className={clsx(style["title"])}>{product.title}</h3>
      <span className={clsx(style["price"])}>{product.price} руб.</span>
    </li>
  );
};

export default ProductCard;
