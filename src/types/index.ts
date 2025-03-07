// export interface IProductCatalogModel {
//   items: IProduct[] | undefined;
//   addItem({ productItem }: { productItem: IProduct }): void;
//   removeItem(id: string): void;
//   setItems(items: IProduct[]): void;
//   getItems({ filterValue }?: { filterValue: string }): IProduct[];
// }

// export interface IOffersCatalog {
//   items: IProduct;
//   addItem(id: string[]): void;
//   removeItem(id: string): void;
//   setItems(items: IProduct[]): void;
// }

// export interface IAuthForm {
//   email: string;
//   login: string;
//   password: string;
// }

// export interface IContacts {
//   contactPhone: string;
//   telegram: string;
//   whatsApp: string;
//   contactEmail: string;
//   vk: string;
// }

// export interface IAdminProfileData {
//   email: string;
//   login: string;
//   contacts: IContacts;
// }

// export interface IAdminModel extends IAdminProfileData {
//   patchProfileData<T extends IAdminProfileData>(
//     originalValues: T,
//     newValues: Partial<T>
//   ): void;
// }
export {};
