import logo from "../images/header/logo.svg";
import profileIcon from "../images/header/profileIcon.svg";
import producPhototEx from "../images/product/productEx.jpg";
import statusProductButtonImg from "../images/product/statusImg.svg";
import { IAdminProfileData, IContacts, IProduct } from "../types";

interface IConstants {
  header: {
    logo: string;
    links: { title: string; link: string }[];
    profileLink: { title: string; link: string; icon: string };
  };
  defaultAdminProfileData: IAdminProfileData;
  productPage: Record<
    string,
    {
      title: string;
      statusImg: string;
    }
  >;
  productListEx: IProduct[];
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
  productPage: {
    descriptionButton: {
      title: "Описание",
      statusImg: statusProductButtonImg,
    },
  },
  productListEx: [
    {
      title: "Серьги",
      price: 11000,
      description: `Изысканные золотые серьги «Бриллиантовая капелька» — воплощение 
    элегантности и стиля. Изготовленные из 585 пробы белого золота, они обладают 
    неповторимым сиянием и прочностью. Каждая сережка украшена одной идеальной 
    бриллиантовой капелькой весом 0,15 карата, которая переливается всеми цветами 
    радуги при попадании света. Форма капли символизирует чистоту и совершенство 
    природы, а её утонченность подчеркивает индивидуальность обладательницы.
    Эти серьги станут идеальным дополнением к любому наряду, будь то вечернее платье или 
    деловой костюм. Их лаконичный дизайн позволяет носить их как днем, так и вечером, добавляя 
    образу женственности и шика. Золото высшей пробы обеспечивает комфорт при длительном ношении, 
    а качественная закрепка камня гарантирует безопасность и долговечность украшения.
    «Бриллиантовые капельки» — это не просто аксессуар, это символ вашей уникальности 
    и безупречного вкуса.`,
      id: "111111",
      tags: ["серьги"],
      photos: [producPhototEx, producPhototEx, producPhototEx, producPhototEx],
      additionalInfo: [{ Вес: "100гр" }],
      isDiscount: false,
    },
  ],
};
