import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { constants } from "../../utils/constants";
import style from "./Store.module.scss";
// import { Selector } from "../../components/Selector/Selector";
import { ProductList } from "@/components/index";
import clsx from "clsx";

interface IStore
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Store: FC<IStore> = (props) => {
  return (
    <section className={clsx(style["store"])} {...props}>
      <h1 className={clsx(style["title"])}>{constants.store.title}</h1>
      <ProductList />
    </section>
  );
};

export default Store;
