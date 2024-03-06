import {configureStore} from "@reduxjs/toolkit";
import {clubsApi} from "src/entites/Club";




export const store = configureStore({
	reducer: {
		[clubsApi.reducerPath]: clubsApi.reducer
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(clubsApi.middleware),
})

export type AppDispatch = typeof store.dispatch