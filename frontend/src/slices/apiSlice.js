import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "User", "Order"], //used to define the types of data we are going to fetch with API
  endpoints: (builder) => ({}),
});
