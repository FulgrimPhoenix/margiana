export interface IProduct {
  title: string;
  price: number;
  description: string;
  id?: string;
  categories: string[];
  photos: string[];
  additionalInfo: [string, string][];
  isDiscount: boolean;
  discountValue?: number;
}
