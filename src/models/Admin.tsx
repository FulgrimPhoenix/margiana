// import { IAdminModel, IAdminProfileData, IContacts } from "../types";
// import { constants } from "../utils/constants";

// class AdminModel implements IAdminModel {
//   email: string;
//   login: string;
//   contacts: IContacts;

//   constructor(params: IAdminProfileData) {
//     this.email = params.email;
//     this.login = params.login;
//     this.contacts = params.contacts;
//   }

//   patchProfileData<T extends IAdminProfileData>(
//     originalObject: T,
//     newValues: Partial<T>
//   ): void {
//     Object.entries(newValues).forEach(([key, value]) => {
//       if (key in originalObject) {
//         originalObject[key as keyof T] = value as T[keyof T];
//       }
//     });
//   }
// }

// export const adminData = new AdminModel(constants.defaultAdminProfileData);
export {};
