import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { constants } from "../../utils/constants";
import "./Product.scss";

export const Product = () => {
  return (
    <section className="product">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="product__photo-container">
            <img
              src={constants.productEx.img}
              className="product__photo"
              alt="фото товара"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__photo-container">
            <img
              src={constants.productEx.img}
              className="product__photo"
              alt="фото товара"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__photo-container">
            <img
              src={constants.productEx.img}
              className="product__photo"
              alt="фото товара"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product__photo-container">
            <img
              src={constants.productEx.img}
              className="product__photo"
              alt="фото товара"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
