import { ButtonHTMLAttributes, useState } from "react";
import { IProduct } from "../../types";
import { constants } from "../../utils/constants";
import "./Store.scss";
import { Selector } from "../Selector/Selector";

interface IStore {
  productList: IProduct[];
}

interface ISelectorsStates {
  productsOnPageOpen: boolean;
  productType: boolean;
}

type TProductType = "Серьги" | "Кольца" | "Браслеты" | "Подвески";

type TProductsOnPage = 8 | 12 | 16;

export const Store = (props: IStore) => {
  const [productsOnPage, setProductsOnPage] = useState<TProductsOnPage>(8);
  const [currentProductList, setCurrentProductList] =
    useState<number>(productsOnPage);
  const paginationDiapozoneSize = 1;
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [selectorsStates, setSelectorsStates] = useState<ISelectorsStates>({
    productsOnPageOpen: false,
    productType: false,
  });
  const [productType, setProductType] = useState<TProductType>("Подвески");

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

  function handleChangeProguctsNumberOnPage(e: any) {
    const buttonInput: number = Number(e.target.innerText) / 1;
    const buttonProguctsNumberOnPage: TProductsOnPage =
      buttonInput === 8 || buttonInput === 12 || buttonInput === 16
        ? buttonInput
        : 8;

    setProductsOnPage(buttonProguctsNumberOnPage as TProductsOnPage);
    setCurrentProductList(buttonProguctsNumberOnPage as TProductsOnPage);
    setSelectorsStates({
      ...selectorsStates,
      [`productsOnPageOpen`]: false,
    });
  }

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
      <div className="store__filter">
        <Selector
          title={"Тип изделия:"}
          options={["Серьги", "Кольца", "Браслеты", "Подвески"]}
          optionState={productType}
          selectorState={selectorsStates.productType}
          setSelectorsStates={() =>
            setSelectorsStates({
              ...selectorsStates,
              [`productType`]: !selectorsStates.productType,
            })
          }
          handleOptionClick={(e: React.MouseEvent<HTMLElement>) =>
            setProductType(e.currentTarget.innerText as TProductType)
          }
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        />
        <Selector
          title={"Отборожать по:"}
          options={["8", "12", "16"]}
          optionState={productsOnPage.toString()}
          selectorState={selectorsStates.productsOnPageOpen}
          setSelectorsStates={() =>
            setSelectorsStates({
              ...selectorsStates,
              [`productsOnPageOpen`]: !selectorsStates.productsOnPageOpen,
            })
          }
          handleOptionClick={handleChangeProguctsNumberOnPage}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        />
      </div>
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
