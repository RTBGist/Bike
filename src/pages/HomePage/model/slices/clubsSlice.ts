import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Club} from "src/entites/Club";



export const clubsApi = createApi({
	reducerPath: 'clubsApi',
	baseQuery: fetchBaseQuery( { baseUrl: 'http://localhost:8000' } ),
	endpoints: (build) => ({
		getAllClubs: build.query<Club[]>({
			query: () => 'clubs/'
		}),
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


export const { useGetAllClubsQuery } = clubsApi;