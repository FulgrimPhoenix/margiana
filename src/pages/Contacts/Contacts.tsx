import "./Contacts.module.scss";
import { constants } from "../../utils/constants";
import { ContactsList, Map } from "@/components/index";
import { Slider } from "@/ui/index";
import style from "./Contacts.module.scss";
import clsx from "clsx";

const Contacts = (): JSX.Element => {
  return (
    <section className={clsx(style["contacts-page"])}>
      <h1 className={clsx(style["title"])}>Контакты</h1>
      <div className={clsx(style["container"])}>
        <img
          className={clsx(style["image"])}
          src={constants.contactsPage.address.img}
          alt="вото здания мастерской"
        />
        <h2 className={clsx(style["block-title"])}>
          {constants.contactsPage.geolocation.title}
        </h2>
        <p className={clsx(style["address-description"])}>
          {constants.contactsPage.address.address}
        </p>
        <div className={clsx(style["address-schedule-container"])}>
          <p className={clsx(style["address-schedule-title"])}>Время работы:</p>
          <div>
            <p className={clsx(style["address-schedule"])}>
              пн-пт: 9.00 - 18.00
            </p>
            <p className={clsx(style["address-schedule"])}>сб-вс: выходные</p>
          </div>
        </div>
      </div>
      <Map />
      <div className={clsx(style["container"])}>
        <h2 className={clsx(style["block-title"])}>
          {constants.contactsPage.contacts.title}
        </h2>
        <ContactsList />
      </div>
      <div className={clsx(style["container"])}>
        <h2 className={clsx(style["block-title"])}>
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
