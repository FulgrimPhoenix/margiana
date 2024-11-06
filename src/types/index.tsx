export interface IProduct {
  title: string;
  price: number;
  description: string;
  id?: string;
  tags: string[];
  photos: string[];
  additionalInfo: Record<string, string>[];
  isDiscount: boolean;
  discountValue?: number;
}

export interface IProductCatalogModel {
  items: IProduct[] | undefined;
  addItem({ productItem }: { productItem: IProduct }): void;
  removeItem(id: string): void;
  setItems(items: IProduct[]): void;
  getItems({ filterValue }?: { filterValue: string }): IProduct[];
}

export interface IOffersCatalog {
  items: IProduct;
  addItem(id: string[]): void;
  removeItem(id: string): void;
  setItems(items: IProduct[]): void;
}

export interface IAuthForm {
  email: string;
  login: string;
  password: string;
}

export interface IContacts {
  phone: string;
  telegram: string;
  whatsApp: string;
  contactEmail: string;
  socialMedia: { title: string; link: string }[];
}

export interface IAdminProfileData extends IContacts {
  email: string;
  login: string;
}
