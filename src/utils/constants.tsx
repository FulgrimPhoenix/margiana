import logo from "../images/header/logo.svg";
import profileIcon from "../images/header/profileIcon.svg";
import { IAdminProfileData, IContacts } from "../types";

interface IConstants {
  header: {
    logo: string;
    links: { title: string; link: string }[];
    profileLink: { title: string; link: string; icon: string };
  };
  defaultAdminProfileData: IAdminProfileData;
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
  defaultAdminProfileData: {
    login: "tester2024",
    email: "tester@mail.ru",
    contactEmail: "tester@mail.ru",
    contactPhone: "+75556662211",
    telegram: "https://t.me/tester2024",
    whatsApp: "https://wa.me/tester2024",
    vk: "https://www.youtube.com/watch?v=hvL1339luv0&ab_channel=RapidLiquid",
  },
};
