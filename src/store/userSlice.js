import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "https://not-backend-samiullahbahadur.vercel.app/" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
      providesTags: [{ type: "User" }],
    }),
    addUser: builder.mutation({
      query: (data) => {
        console.log(data)
        return {
          
          url: "/users",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [{ type: "User" }],
    }),
  }),
});

export const { useGetUserQuery, useAddUserMutation } = userApi;
export { userApi };
