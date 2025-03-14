import { useGetOffersQuery } from "@/store/api/productsApi";
import clsx from "clsx";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import style from "./Carousel.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { IOffer } from "@/types/product.type";
import { Button } from "@/ui";

const Carousel: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = (props) => {
  const { data = [], isLoading } = useGetOffersQuery();

  if (isLoading) return <span>Loading...</span>;

  return (
    <ul className={clsx(style["carousel"])} {...props}>
      <Swiper navigation={false} modules={[Pagination]} pagination={true}>
        {data.map((slide: IOffer) => (
          <SwiperSlide>
            <li className={clsx(style["slide"])}>
              {!!slide.photo && (
                <img
                  src={slide.photo}
                  className={clsx(style["slide-photo"])}
                  alt="фото"
                />
              )}

              <div className={clsx(style["slide-container"])}>
                {!!slide.title && (
                  <p className={clsx(style["slide-title"])}>{slide.title}</p>
                )}
                {!!slide.price && (
                  <p className={clsx(style["slide-subtitle"])}>
                    {slide.price} руб.
                  </p>
                )}
                <Button title="Показать товар" color="white" />
              </div>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
};

export default Carousel;
