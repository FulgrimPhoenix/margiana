import React, { useContext } from "react";
import "./Contacts.scss";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
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
        <YMaps>
          <div className="contacts__geolocation-map">
            <Map defaultState={{ center: [55.794684, 37.735773], zoom: 17 }}>
              <Placemark geometry={[55.794684, 37.735773]} />
            </Map>
          </div>
        </YMaps>
        <h2 className="contacts__block-title">
          {constants.contactsPage.geolocation.title}
        </h2>
        <p className="contacts__geolocation-description">
          {constants.contactsPage.geolocation.address}
        </p>
        <a
          href="tel: +79096695149"
          target="blank"
          className="contacts__geolocation-contact-phone"
        >
          {constants.contactsPage.geolocation.contactPhone}
        </a>
        <div className="contacts__geolocation-schedule-container">
          <p className="contacts__geolocation-schedule-title">Время работы:</p>
          <div>
            <p className="contacts__geolocation-schedule">
              пн-пт: 9.00 - 18.00
            </p>
            <p className="contacts__geolocation-schedule">сб-вс: выходные</p>
          </div>
        </div>
        <p className="contacts__geolocation-contact-email">
          {constants.contactsPage.geolocation.contactEmail}
        </p>
      </div>
      <div className="contacts__path-guide">
        <h2 className="contacts__block-title">
          {constants.contactsPage.pathGuide.title}
        </h2>
        <ul className="contacts__path-guide-slider">
          <Swiper
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
          >
            {constants.contactsPage.pathGuide.guide.map(
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
