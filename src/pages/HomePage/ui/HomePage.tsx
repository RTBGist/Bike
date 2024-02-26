import {useGetAllClubsQuery} from "../model/slices/clubsSlice";
import {ClubCard} from "src/entites/ClubCard";
import {Club} from "src/entites/ClubCard/model/types";

export const HomePage = () => {
	const {data, error, isLoading} = useGetAllClubsQuery();

	if(isLoading) {
		return <div className="text-lg font-bold text-center m-auto">Идет загрузка...</div>
	}

	if(error) {
		return <div className="text-lg font-bold text-center m-auto text-red-600/100">Возникла ошибка {error.name} - {error.message}</div>
	}

	return (
			<div>
				{!!data && data.map((club: Club) => <ClubCard club={club} key={club.id} />)}
			</div>
	);
};
