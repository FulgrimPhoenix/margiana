import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAdmin } from "../../types/users.types";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    getAdminInfo: builder.query<IAdmin, void>({
      query: () => `admin`,
      providesTags: ["Admin"],
    }),
    patchAdminInfo: builder.mutation<IAdmin, Partial<IAdmin>>({
      query: (body) => ({
        url: "admin",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const { useGetAdminInfoQuery, usePatchAdminInfoMutation } = adminApi;
