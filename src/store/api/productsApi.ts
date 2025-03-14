import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IOffer, IProduct } from "@/types/product.type";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProductsList: builder.query<IProduct[], void>({
      query: () => `products`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Products" as const,
                id,
              })),
              { type: "Products", id: "PRODUCT_LIST" },
            ]
          : [{ type: "Products", id: "PRODUCT_LIST" }],
    }),
    getOffers: builder.query<IOffer[], void>({
      query: () => `offers`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Products" as const,
                id,
              })),
              { type: "Products", id: "OFFERS_LIST" },
            ]
          : [{ type: "Products", id: "OFFERS_LIST" }],
    }),
    addProduct: builder.mutation<void, IProduct>({
      query: (body) => ({
        url: "products",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Products", id: "PRODUCT_LIST" }],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsListQuery,
  useGetOffersQuery,
} = productsApi;
