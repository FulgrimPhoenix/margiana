import { useState } from "react";
import { IProduct } from "../../types";
import { constants } from "../../utils/constants";
import "./Store.scss";

interface IStore {
  productList: IProduct[];
}

export const Store = (props: IStore) => {
  const [productsOnPage, setProductsOnPage] = useState<number>(6);
  const [currentProductList, setCurrentProductList] =
    useState<number>(productsOnPage);
  const paginationDiapozoneSize = 1;
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);

  const getPageNumbers = () => {
    let pagNums: number[] = [];
    for (
      let i = 1;
      i <= Math.ceil(props.productList.length / productsOnPage);
      i++
    ) {
      pagNums.push(i);
    }
    return pagNums;
  };

  const pageNumbers = getPageNumbers();

  function handleChangePage(e: any) {
    const buttonPageNumbers = Number(e.target.innerText) / 1;

    if (!isNaN(buttonPageNumbers)) {
      setCurrentPageNumber(buttonPageNumbers);
      setCurrentProductList(buttonPageNumbers * productsOnPage);
    } else if (e.target.innerText === ">") {
      if (currentPageNumber + 1 > pageNumbers.length) {
        return;
      }
      setCurrentProductList((prev) => prev + productsOnPage);
      setCurrentPageNumber((prev) => prev + 1);
    } else if (e.target.innerText === "<") {
      if (currentPageNumber - 1 < 1) {
        return;
      }
      setCurrentProductList((prev) => prev - productsOnPage);
      setCurrentPageNumber((prev) => prev - 1);
    }
  }

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
              <li key={`product-${item.id}`} className="store__product-card">
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
      {pageNumbers.length > 1 ? (
        <div className="store__pagination">
          <button
            onClick={(e) => handleChangePage(e)}
            className="store__pagination-button"
          >
            <div className="store__pagination-page-number">{"<"}</div>
          </button>
          <button
            onClick={(e) => handleChangePage(e)}
            className={`store__pagination-button ${
              1 === currentPageNumber ? "store__pagination-button_active" : ""
            }`}
          >
            <div className="store__pagination-page-number">{"1"}</div>
          </button>
          {currentPageNumber <= paginationDiapozoneSize + 2 ? (
            <></>
          ) : (
            <span>...</span>
          )}
          {pageNumbers.map((number, i) => {
            if (
              number !== 1 &&
              number !== pageNumbers[pageNumbers.length - 1] &&
              currentPageNumber <= number + paginationDiapozoneSize &&
              currentPageNumber >= number - paginationDiapozoneSize
            ) {
              return (
                <button
                  key={`page-${number}`}
                  onClick={(e) => handleChangePage(e)}
                  className={`store__pagination-button ${
                    i + 1 === currentPageNumber
                      ? "store__pagination-button_active"
                      : ""
                  }`}
                >
                  <div className="store__pagination-page-number">{number}</div>
                </button>
              );
            }
            return <></>;
          })}

          {currentPageNumber > pageNumbers.length - 2 ? (
            <></>
          ) : (
            <span>...</span>
          )}
          <button
            onClick={(e) => handleChangePage(e)}
            className={`store__pagination-button ${
              pageNumbers.length === currentPageNumber
                ? "store__pagination-button_active"
                : ""
            }`}
          >
            <div className="store__pagination-page-number">
              {pageNumbers.length}
            </div>
          </button>
          <button
            onClick={(e) => handleChangePage(e)}
            className="store__pagination-button"
          >
            <div className="store__pagination-page-number">{">"}</div>
          </button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};
