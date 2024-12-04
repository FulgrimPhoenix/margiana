import React, { useContext } from "react";
import "./Contacts.scss";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { constants } from "../../utils/constants";

export const Contancts = (): React.ReactElement => {
  const adminData = useContext(CurrentUserContext);
  return (
    <section className="contacts">
      <h1 className="contacts-page__title">Контакты</h1>
      <div className="contacts-page__address">
        <img
          className="contacts-page__address-image"
          src={constants.contactsPage.address.img}
          alt="вото здания мастерской"
        />
        <h2 className="contacts-page__block-title">
          {constants.contactsPage.geolocation.title}
        </h2>
        <p className="contacts-page__address-description">
          {constants.contactsPage.address.address}
        </p>
        <div className="contacts-page__address-schedule-container">
          <p className="contacts-page__address-schedule-title">Время работы:</p>
          <div>
            <p className="contacts-page__address-schedule">
              пн-пт: 9.00 - 18.00
            </p>
            <p className="contacts-page__address-schedule">сб-вс: выходные</p>
          </div>
        </div>
      </div>
      <div className="contacts-page__geolocation">
        <YMaps>
          <div className="contacts-page__geolocation-map">
            <Map defaultState={{ center: [55.794684, 37.735773], zoom: 17 }}>
              <Placemark geometry={[55.794684, 37.735773]} />
            </Map>
          </div>
        </YMaps>
      </div>
      <div className="contacts-page__contacts">
        <h2 className="contacts-page__block-title">
          {constants.contactsPage.contacts.title}
        </h2>
        <ul className="contacts-page__contacts-list">
          {constants.contactsPage.contacts.contactsList.map((item) => {
            return (
              <li className="contacts-page__contacts-list-item">
                <img
                  className="contacts-page__contacts-list-item-icon"
                  src={item.icon}
                  alt="иконка"
                />
                {item.src === null ? (
                  <p className="contacts-page__contacts-list-item-title">
                    {item.title}
                  </p>
                ) : (
                  <a
                    href={item.src}
                    className="contacts-page__contacts-list-item-title"
                    target="blank"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="contacts-page__path-guide">
        <h2 className="contacts-page__block-title">
          {constants.contactsPage.pathGuide.title}
        </h2>
        <ul className="contacts-page__path-guide-slider">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
          >
            {constants.contactsPage.pathGuide.guide.map(
              (guideSlide: { photo: string; description: string }) => (
                <SwiperSlide>
                  <li className="contacts-page__path-guide-slide">
                    <img
                      src={guideSlide.photo}
                      className="contacts-page__path-guide-slide-photo"
                      alt="фото товара"
                    />
                    <p className="contacts-page__path-guide-slide-description">
                      {guideSlide.description}
                    </p>
                  </li>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};
