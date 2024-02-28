import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Club} from "src/entites/Club";



export const clubsApi = createApi({
	reducerPath: 'clubsApi',
	baseQuery: fetchBaseQuery( { baseUrl: 'http://localhost:8000' } ),
	tagTypes: ['Club'], // объявляем используемые теги
	endpoints: (build) => ({
		getAllClubs: build.query<Club[]>({
			query: () => 'clubs/',
			providesTags: ['Club'], // объявляем еще раз в запросе тег
		}),
		createClub: build.mutation({
			query: (body) => ({
				url: 'clubs',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Club'], // указываем какие теги нужно обновить при данном запросе
		})
		// Обработка запроса вручную
		// getAllClubs: (build.query({
		// 	queryFn: async (arg) => {
		// 		try {
		// 			const response = await fetch('http://localhost:8000');
		// 			return {data: await response.json() };
		// 		} catch (e) {
		// 			return { error: e.message };
		// 		}
		// 	},
		// }),
	}),
});


export const { useGetAllClubsQuery, useCreateClubMutation } = clubsApi;