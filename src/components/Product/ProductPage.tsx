import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import "./ProductPage.scss";
import { IProduct } from "../../types";
import React, { useState } from "react";
import { constants } from "../../utils/constants";

interface IProductPage {
  productData: IProduct;
}

export const ProductPage = ({
  productData,
}: IProductPage): React.ReactElement => {
  const [isBlockOpen, setIsBlockOpen] = useState<Record<string, boolean>>({
    description: false,
    additionalInfo: false,
  });
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
          {productData.photos.map((photo: string) => (
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
      <h2 className="product-page__product-title">{productData.title}</h2>
      <span className="product-page__product-price">
        {productData.price},00 руб.
      </span>
      <div className="product-page__additionas-container">
        <button
          onClick={() => {
            setIsBlockOpen({
              ...isBlockOpen,
              ["description"]: !isBlockOpen["description"],
            });
          }}
          className="product-page__additional-button"
        >
          <h3 className="product-page__additional-button-title">
            {constants.productPage.descriptionButton.title}
          </h3>
          <img
            className={"product-page__additional-button-status-img"}
            src={constants.productPage.descriptionButton.statusImg}
            alt="иконка статуса кнопки"
          />
        </button>
        <p
          className={`product-page__product-description ${
            isBlockOpen.description
              ? "product-page__product-description_open"
              : "product-page__product-description_close"
          }`}
        >
          {productData.description}
        </p>
      </div>
    </section>
  );
};
