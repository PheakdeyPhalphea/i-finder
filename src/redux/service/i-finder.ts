import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const iFinderApi = createApi({
  reducerPath: "iFinderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_IFINDER_API_URL,
  }),
  endpoints: (builder) => ({
    // get all products
    getNews: builder.query<any, { page: number; pageSize: number }>({
      query: ({ page = 1, pageSize = 5 }) => "data/news.json",
    }),
    getVideos: builder.query<any, { page: number; pageSize: number }>({
      query: ({ page = 1, pageSize = 10 }) => "data/videos.json",
    }),
  }),
});

export const { useGetNewsQuery , useGetVideosQuery } = iFinderApi;
