import React from 'react';
import {useGetAllClubsQuery} from "../model/slices/clubsSlice";

export const HomePage = () => {
	const {data, error, isLoading} = useGetAllClubsQuery();
	console.log(data);

	return (
			<div>
				HomePage
			</div>
	);
};
