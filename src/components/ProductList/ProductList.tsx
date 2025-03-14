import ProductCard from "@/components/ProductCard/ProductCard";
import clsx from "clsx";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import style from "./ProductList.module.scss";
import { IProduct } from "@/types/product.type";
import { useGetProductsListQuery } from "@/store/api/productsApi";

interface IProductList
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

const ProductList: FC<IProductList> = ({ ...props }) => {
  const { data = [], isLoading } = useGetProductsListQuery();

  if (isLoading) return <span>Loading...</span>;
  return (
    <ul className={clsx(style["product-list"])} {...props}>
      {data.map((item: IProduct) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ul>
  );
};
export default ProductList;
