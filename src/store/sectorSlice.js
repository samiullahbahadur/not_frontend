import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const sectorApi = createApi({
  reducerPath: "setcor",
  baseQuery: fetchBaseQuery({ baseUrl: "https://not-backend-samiullahbahadur.vercel.app/" }),
  endpoints: (builder) => ({
    getSector: builder.query({
      query: () => {
        return {
          url: "/sectors",
          method: "GET",
        };
      },
      providesTags: [{ type: "Sector" }],
    }),
  }),
});

export const { useGetSectorQuery } = sectorApi;
export { sectorApi };
