import logo from "../images/header/logo.svg";
import profileIcon from "../images/header/profileIcon.svg";
import { IContacts } from "../types";

interface IConstants {
  header: {
    logo: string;
    links: { title: string; link: string }[];
    profileLink: { title: string; link: string; icon: string };
  };
  contacts: IContacts;
}

export const constants: IConstants = {
  header: {
    logo: logo,
    links: [
      { title: "Главная", link: "/" },
      { title: "Каталог", link: "/shop" },
      { title: "Контакты", link: "/contacts" },
    ],
    profileLink: { title: "Профиль", link: "/profile", icon: profileIcon },
  },
  contacts: {
    contactPhone: "+79998887766",
    telegram: "https://t.me/Fulgrim30k",
    whatsApp: "https://wa.me/qr/DFHYVDLVFO4NB1",
    contactEmail: "ivanyuschin.ilia2010@yandex.ru",
    socialMedia: [{ title: "VK", link: "https://vk.com/id127044462" }],
  },
};
