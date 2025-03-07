import { ButtonHTMLAttributes, DetailedHTMLProps, FC, useState } from "react";
import { constants } from "../../utils/constants";
import "./Store.scss";
// import { Selector } from "../../components/Selector/Selector";
import { ProductList } from "@components/index";

interface IStore
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

interface ISelectorsStates {
  productsOnPageOpen: boolean;
  productType: boolean;
}

type TProductType = "Серьги" | "Кольца" | "Браслеты" | "Подвески";

type TProductsOnPage = 8 | 12 | 16;

const Store: FC<IStore> = (props) => {
  return (
    <section className="store" {...props}>
      <h1 className="section-title">{constants.store.title}</h1>
      <ProductList />
    </section>
  );
};

export default Store;
