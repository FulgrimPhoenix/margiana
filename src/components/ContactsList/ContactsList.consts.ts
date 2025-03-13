import { EmailIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from "@/assets";
import { IAdmin } from "@/types/users.types";
import { ReactNode } from "react";

interface ICONTACTS_LIST {
  icon: ReactNode;
  name: keyof IAdmin;
  title?: string;
}

export const CONTACTS_LIST: ICONTACTS_LIST[] = [
  { name: "whatsApp", icon: WhatsAppIcon({}), title: "WhatsApp" },
  { name: "telegram", icon: TelegramIcon({}), title: "Telegram" },
  {
    icon: PhoneIcon({}),
    name: "contactPhone",
  },
  {
    name: "contactEmail",
    icon: EmailIcon({}),
  },
];
