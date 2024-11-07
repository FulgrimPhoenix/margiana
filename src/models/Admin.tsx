import { IAdminModel, IAdminProfileData } from "../types";

class AdminModel implements IAdminModel {
  email: string;
  login: string;
  phone: string;
  telegram: string;
  whatsApp: string;
  contactEmail: string;
  socialMedia: { title: string; link: string }[];

  constructor(params: IAdminProfileData) {
    this.email = params.email;
    this.login = params.login;
    this.phone = params.phone;
    this.telegram = params.telegram;
    this.whatsApp = params.whatsApp;
    this.contactEmail = params.contactEmail;
    this.socialMedia = params.socialMedia;
  }

  patchProfileData<T extends IAdminProfileData>(
    originalObject: T,
    newValues: Partial<T>
  ): void {
    Object.entries(newValues).forEach(([key, value]) => {
      if (key in originalObject) {
        originalObject[key as keyof T] = value as T[keyof T];
      }
    });
  }
}

export const adminData = new AdminModel({
  email: "ivanyuschin.work@yandex.ru",
  login: "tester",
  phone: "+79998887766",
  telegram: "https://t.me/Fulgrim30k",
  whatsApp: "https://wa.me/qr/DFHYVDLVFO4NB1",
  contactEmail: "ivanyuschin.ilia2010@yandex.ru",
  socialMedia: [{ title: "VK", link: "https://vk.com/id127044462" }],
});
