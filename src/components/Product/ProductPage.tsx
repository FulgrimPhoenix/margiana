import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import "./ProductPage.scss";
import React, { FC, useEffect, useRef, useState } from "react";
import { constants } from "../../utils/constants";
import { IProduct } from "@/types/product.type";
import {
  useGetProductByIdQuery,
  useGetProductsListQuery,
} from "@/store/api/productsApi";
import { useParams } from "react-router-dom";

interface IProductPage {}

export const ProductPage: FC = () => {
  const [isBlockOpen, setIsBlockOpen] = useState<Record<string, boolean>>({
    description: false,
    additionalInfo: false,
  });

  const { id } = useParams();
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const additionalInfoRef = useRef<HTMLParagraphElement>(null);
  console.log(id);

  const { data: productList, isLoading: isProductListLoading } =
    useGetProductsListQuery();
  const { data: currentProduct, isLoading: isCurrentProductLoading } =
    useGetProductByIdQuery(id ?? "");

  if (
    isProductListLoading ||
    isCurrentProductLoading ||
    !currentProduct ||
    !productList
  )
    return <span>Loading...</span>;

  function scrollToInfoBlock(
    ref: React.RefObject<HTMLParagraphElement>,
    blockName: string
  ): void {
    if (isBlockOpen[blockName] && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  useEffect(() => {
    setTimeout(() => {
      scrollToInfoBlock(descriptionRef, "description");
      scrollToInfoBlock(additionalInfoRef, "additionalInfo");
    }, 200);
  }, [isBlockOpen]);

  return (
    <section className="product-page">
      <ul className="product-page__photo-slider">
        <Swiper
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          {currentProduct.photos.map((photo: string) => (
            <SwiperSlide>
              <li className="product-page__photo-container">
                <img
                  src={photo}
                  className="product-page__photo"
                  alt="фото товара"
                />
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
      <h2 className="product-page__product-title">{currentProduct.title}</h2>
      <span className="product-page__product-price">
        {currentProduct.price},00 руб.
      </span>
      <div className="product-page__additionas-container">
        <button
          onClick={() => {
            setIsBlockOpen({
              ...isBlockOpen,
              ["description"]: !isBlockOpen["description"],
            });
          }}
          className="product-page__additional-info-button"
        >
          <h3 className="product-page__additional-info-button-title">
            {constants.productPage.descriptionButton.title}
          </h3>
          <img
            className={`product-page__additional-info-button-status-img ${
              isBlockOpen.description
                ? "product-page__additional-info-button-status-img_open"
                : ""
            }`}
            src={constants.productPage.descriptionButton.statusImg}
            alt="иконка статуса кнопки"
          />
        </button>
        <p
          ref={descriptionRef}
          className={`product-page__additional-info ${
            isBlockOpen.description
              ? "product-page__additional-info_open"
              : "product-page__additional-info_close"
          }`}
        >
          {currentProduct.description}
        </p>
        <button
          onClick={() => {
            setIsBlockOpen({
              ...isBlockOpen,
              ["additionalInfo"]: !isBlockOpen["additionalInfo"],
            });
          }}
          className="product-page__additional-info-button"
        >
          <h3 className="product-page__additional-info-button-title">
            {constants.productPage.additionalInfoButton.title}
          </h3>
          <img
            className={`product-page__additional-info-button-status-img ${
              isBlockOpen.additionalInfo
                ? "product-page__additional-info-button-status-img_open"
                : ""
            }`}
            src={constants.productPage.descriptionButton.statusImg}
            alt="иконка статуса кнопки"
          />
        </button>
        <div
          ref={additionalInfoRef}
          className={`product-page__additional-info ${
            isBlockOpen.additionalInfo
              ? "product-page__additional-info_open"
              : "product-page__additional-info_close"
          }`}
        >
          {currentProduct.additionalInfo.map((item) => {
            return (
              <p className="product-page__additional-info-param-item">
                <span style={{ fontWeight: 600 }}>{`${item[0]}: `}</span>
                {item[1]}
              </p>
            );
          })}
        </div>
      </div>
      <div className="product-page__similar-items">
        <h2 className="product-page__section-title">
          {constants.productPage.similarItemsBlock.title}
        </h2>
        <ul className="product-page__similar-items-cards-container">
          <Swiper
            spaceBetween={120}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper: any) => console.log(swiper)}
          >
            {productList.map((item) => {
              return (
                <SwiperSlide>
                  <li className="product-page__similar-items-card">
                    <img
                      src={item.photos[0]}
                      className="product-page__similar-items-card-photo"
                      alt="фото товара"
                    />
                    <h3 className="product-page__similar-items-card-title">
                      {item.title}
                    </h3>
                    <span className="product-page__similar-items-card-price">
                      {item.price} руб.
                    </span>
                  </li>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};
