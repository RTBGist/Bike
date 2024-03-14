import {configureStore} from "@reduxjs/toolkit";
import {clubsApi} from "src/entites/Club";
import clubsReducer from 'src/entites/Club/model/slices/clubSlice'



export const store = configureStore({
	reducer: {
		clubs: clubsReducer,
		[clubsApi.reducerPath]: clubsApi.reducer
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(clubsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch