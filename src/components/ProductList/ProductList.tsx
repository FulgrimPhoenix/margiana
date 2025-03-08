import ProductCard from "@components/ProductCard/ProductCard";
import { productEx } from "@utils/productEx";
import clsx from "clsx";
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import { IProduct } from "types/product.type";
import style from "./ProductList.module.scss";

interface IProductList
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

const ProductList: FC<IProductList> = ({ ...props }) => {
  return (
    <ul className={clsx(style["product-list"])} {...props}>
      {productEx.map((item: IProduct) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ul>
  );
};
export default ProductList;
