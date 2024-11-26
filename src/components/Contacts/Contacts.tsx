import React, { useContext } from "react";
import "./Contacts.scss";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { constants } from "../../utils/constants";

export const Contancts = (): React.ReactElement => {
  const adminData = useContext(CurrentUserContext);
  return (
    <section className="contacts">
      <div className="contacts__geolocation">
        <h2 className="contacts__block-title">{constants.constactsPage.geolocation.title}</h2>
        <YMaps>
          <div className="contacts__geolocation-map">
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
          </div>
        </YMaps>
        <p className="contacts__geolocation-description">{constants.constactsPage.geolocation.address}</p>
      </div>
      <div className="contacts__path-guide">
        <h2 className="contacts__block-title">{constants.constactsPage.pathGuide.title}</h2>
        <ul className="contacts__path-guide-slider">
          <Swiper
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
          >
            {constants.constactsPage.pathGuide.guide.map(
              (guideSlide: { photo: string; description: string }) => (
                <SwiperSlide>
                  <li className="contacts__path-guide-slide">
                    <img
                      src={guideSlide.photo}
                      className="contacts__path-guide-slide-photo"
                      alt="фото товара"
                    />
                    <p className="contacts__path-guide-slide-description">
                      {guideSlide.description}
                    </p>
                  </li>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </ul>
      </div>
      <div className="contacts__social-media">
        <h2 className="contacts__block-title">lol</h2>
        <ul className="contacts__social-media-list">
          <li className="contacts__social-media-list-item">
            {adminData.contacts.contactEmail}
          </li>
          <li className="contacts__social-media-list-item">
            {adminData.contacts.contactPhone}
          </li>
          <li className="contacts__social-media-list-item">
            {adminData.contacts.telegram}
          </li>
          <li className="contacts__social-media-list-item">
            {adminData.contacts.whatsApp}
          </li>
        </ul>
      </div>
    </section>
  );
};
