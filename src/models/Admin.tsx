import { IAdminModel, IAdminProfileData } from "../types";
import { constants } from "../utils/constants";

class AdminModel implements IAdminModel {
  email: string;
  login: string;
  contactPhone: string;
  telegram: string;
  whatsApp: string;
  contactEmail: string;
  vk: string;

  constructor(params: IAdminProfileData) {
    this.email = params.email;
    this.login = params.login;
    this.contactPhone = params.contactPhone;
    this.telegram = params.telegram;
    this.whatsApp = params.whatsApp;
    this.contactEmail = params.contactEmail;
    this.vk = params.vk;
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

export const adminData = new AdminModel(constants.defaultAdminProfileData);
