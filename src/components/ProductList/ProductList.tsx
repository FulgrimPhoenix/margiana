import ProductCard from "@/components/ProductCard/ProductCard";
import { productEx } from "@/utils/productEx";
import clsx from "clsx";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import style from "./ProductList.module.scss";
import { IProduct } from "@/types/product.type";

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
