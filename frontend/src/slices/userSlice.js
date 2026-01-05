import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login : builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        body: data,
        method: 'POST'
      }),
    }),
  }),
});

export const { useLoginMutation } = userApiSlice;
