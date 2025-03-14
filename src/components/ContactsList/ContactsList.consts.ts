import { EmailIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from "@/assets";
import { IAdmin } from "@/types/users.types";
import { ReactNode } from "react";

interface ICONTACTS_LIST {
  icon: ReactNode;
  name: keyof IAdmin;
  title?: string;
}

export const CONTACTS_LIST: ICONTACTS_LIST[] = [
  { name: "whatsApp", icon: WhatsAppIcon({ size: "sm" }), title: "WhatsApp" },
  { name: "telegram", icon: TelegramIcon({ size: "sm" }), title: "Telegram" },
  {
    icon: PhoneIcon({ size: "sm" }),
    name: "contactPhone",
  },
  {
    name: "contactEmail",
    icon: EmailIcon({ size: "sm" }),
  },
];
