import { useState } from "react";
import { IProduct } from "../../types";
import { constants } from "../../utils/constants";
import "./Store.scss";

interface IStore {
  productList: IProduct[];
}

export const Store = (props: IStore) => {
  const [productsOnPage, setProductsOnPage] = useState<number>(4);
  const [currentProductList, setCurrentProductList] =
    useState<number>(productsOnPage);

  const pageNumbers = () => {
    let pagNums: number[] = [];
    for (
      let i = 1;
      i <= Math.floor(props.productList.length / productsOnPage);
      i++
    ) {
      pagNums.push(i);
    }
    return pagNums;
  };

  return (
    <section className="store">
      <h1 className="section-title">{constants.store.title}</h1>
      <div className="store__product-grid">
        {props.productList.map((item, index) => {
          if (
            index < currentProductList &&
            index >= currentProductList - productsOnPage
          ) {
            return (
              <li className="store__product-card">
                <img
                  src={item.photos[0]}
                  className="store__product-card-photo"
                  alt="фото товара"
                />
                <h3 className="store__product-card-title">{item.title}</h3>
                <span className="store__product-card-price">
                  {item.price} руб.
                </span>
              </li>
            );
          }
          return <></>;
        })}
      </div>
      {pageNumbers().length > 1 ? (
        <div className="store__pagination">
          <a className="store__pagination-button" href="#">
            <div>Prev</div>
          </a>
          {pageNumbers().map((number) => (
            <a className="store__pagination-button" href="#">
              <div>{number}</div>
            </a>
          ))}
          <a className="store__pagination-button" href="#">
            <div>Next</div>
          </a>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};
