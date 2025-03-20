import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import clsx from "clsx";
import style from "./PathGuide.module.scss";
import React, { FC } from "react";

interface IPathGuide extends SwiperProps {
  pagination: boolean;
  slidesList: {
    photo?: string;
    description?: string;
  }[];
}

const PathGuide: FC<IPathGuide> = ({ pagination, slidesList, ...props }) => {
  return (
    <ul className={clsx(style["slider"])}>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={pagination ? [Pagination] : []}
        spaceBetween={50}
        slidesPerView={1}
        {...props}
      >
        {slidesList.map((slide: { photo?: string; description?: string }) => (
          <SwiperSlide>
            <li className={clsx(style["slide"])}>
              {!!slide.photo && (
                <img
                  src={slide.photo}
                  className={clsx(style["slide-photo"])}
                  alt="фото"
                />
              )}
              {!!slide.description && (
                <p className={clsx(style["slide-description"])}>
                  {slide.description}
                </p>
              )}
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
};

const memoizedPathGuide = React.memo(PathGuide, (prevProps, nextProps) => {
  return (
    prevProps.pagination === nextProps.pagination &&
    prevProps.slidesList === nextProps.slidesList
  );
});

export default memoizedPathGuide;
