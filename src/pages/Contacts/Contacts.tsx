import "./Contacts.scss";
import { constants } from "../../utils/constants";
import { ContactsList, Map } from "@components/index";
import { Slider } from "@ui/index";

const Contacts = (): JSX.Element => {
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
      <Map />
      <div className="contacts-page__contacts">
        <h2 className="contacts-page__block-title">
          {constants.contactsPage.contacts.title}
        </h2>
        <ContactsList />
      </div>
      <div className="contacts-page__path-guide">
        <h2 className="contacts-page__block-title">
          {constants.contactsPage.pathGuide.title}
        </h2>
        <Slider
          slidesList={constants.contactsPage.pathGuide.guide}
          pagination={true}
        />
      </div>
    </section>
  );
};

export default Contacts;
