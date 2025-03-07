import logo from "../images/header/logo.svg";
import profileIcon from "../images/header/profileIcon.svg";
import producPhototEx from "../images/product/productEx.jpg";
import statusProductButtonImg from "../images/product/statusImg.svg";
import { IAdminProfileData, IContacts, IProduct } from "../types";
import pathGuideTest from "../images/contacts/pathGuideTest.jpg";
import workshopBuilding from "../images/contacts/workshopBuilding.png";
import telegramIcon from "../images/contacts/icons/telegramIcon.svg";
import whatsAppIcon from "../images/contacts/icons/whatsAppIcon.svg";
import emailIcon from "../images/contacts/icons/emailIcon.svg";
import phoneIcon from "../images/contacts/icons/phoneIcon.svg";
import { productEx } from "./productEx";

interface IConstants {
  header: {
    logo: string;
    links: { title: string; link: string }[];
    profileLink: { title: string; link: string; icon: string };
  };
  defaultAdminProfileData: IAdminProfileData;
  productPage: {
    descriptionButton: {
      title: string;
      statusImg: string;
    };
    additionalInfoButton: {
      title: string;
      statusImg: string;
    };
    similarItemsBlock: {
      title: string;
    };
    contacts: {
      title: string;
    };
  };
  productListEx: IProduct[];
  similarProductListEx: IProduct[];
  contactsPage: {
    address: {
      img: string;
      address: string;
    };
    geolocation: {
      title: string;

      contactPhone: string;
      contactEmail: string;
    };
    pathGuide: {
      title: string;
      guide: { photo: string; description: string }[];
    };
    contacts: {
      title: string;
      contactsList: {
        icon: string;
        itemTitle: {
          text: string;
          src?: string;
        };
      }[];
    };
  };
  store: {
    title: string;
  };
}

const contactsDefault = {
  contactEmail: "tester@mail.ru",
  contactPhone: "+75556662211",
  telegram: "https://t.me/tester2024",
  whatsApp: "https://wa.me/tester2024",
  vk: "https://www.youtube.com/watch?v=hvL1339luv0&ab_channel=RapidLiquid",
};

export const constants: IConstants = {
  header: {
    logo: logo,
    links: [
      { title: "Главная", link: "/" },
      { title: "Каталог", link: "/shop" },
      { title: "Контакты", link: "/contacts" },
      { title: "П", link: "/product" },
    ],
    profileLink: { title: "Профиль", link: "/profile", icon: profileIcon },
  },
  defaultAdminProfileData: {
    login: "tester2024",
    email: "tester@mail.ru",
    contacts: contactsDefault,
  },
  productPage: {
    descriptionButton: {
      title: "Описание",
      statusImg: statusProductButtonImg,
    },
    additionalInfoButton: {
      title: "Дополнительная информация",
      statusImg: statusProductButtonImg,
    },
    similarItemsBlock: {
      title: "Похожие товары",
    },
    contacts: {
      title: "Подписывайся на нас",
    },
  },
  productListEx: [
    {
      title: "Серьги1",
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
      categories: ["серьги"],
      photos: [producPhototEx, producPhototEx, producPhototEx, producPhototEx],
      additionalInfo: [
        ["Вес", "100гр"],
        ["Размер", "15 x 10 x 1 см"],
        ["Материал", "Золото"],
      ],
      isDiscount: false,
    },
  ],
  similarProductListEx: productEx,
  contactsPage: {
    address: {
      img: workshopBuilding,
      address: "Большая Черкизовская улица, 24Ас6, Москва, 107553",
    },
    geolocation: {
      title: "Мастерская Margiana",

      contactPhone: contactsDefault.contactPhone,
      contactEmail: contactsDefault.contactEmail,
    },
    pathGuide: {
      title: "Как к нам пройти:",
      guide: [
        { photo: pathGuideTest, description: "Идите налево" },
        { photo: pathGuideTest, description: "Идите налево" },
        { photo: pathGuideTest, description: "Идите налево" },
        { photo: pathGuideTest, description: "Идите налево" },
      ],
    },
    contacts: {
      title: "По любым вопросам обращаться:",
      contactsList: [
        {
          icon: phoneIcon,
          itemTitle: {
            text: contactsDefault.contactPhone,
            src: `tel: ${contactsDefault.contactPhone}`,
          },
        },
        {
          icon: whatsAppIcon,
          itemTitle: {
            text: "WhatsApp",
            src: contactsDefault.whatsApp,
          },
        },
        {
          itemTitle: { text: "Telegram", src: contactsDefault.telegram },

          icon: telegramIcon,
        },
        { itemTitle: { text: contactsDefault.contactEmail }, icon: emailIcon },
      ],
    },
  },
  store: {
    title: "Каталог товаров",
  },
};
