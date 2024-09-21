import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5273/api/posts",
  }),
  endpoints: (builder) => ({
    getList: builder.query<IPost[], void>({
      query: () => ``,
    }),
    getById: builder.query<Response<IPost>, { id: number }>({
      query: ({ id }) => `${id}`,
    }),
    uploadImage: builder.mutation({
      query: (imageFile) => {
        const formData = new FormData();
        formData.append("image", imageFile);

        return {
          url: "/upload",
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});

export const { useGetByIdQuery, useGetListQuery, useUploadImageMutation } =
  postApi;
