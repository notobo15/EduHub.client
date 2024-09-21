import adminSlice from "@/features/admin/adminSlice";
import globalSlice from "@/features/global/globalSlice";
import { postApi } from "@/services/postApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    admin: adminSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware({}).concat([postApi.middleware]),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
