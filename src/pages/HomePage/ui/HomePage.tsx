import {useCreateClubMutation, useGetAllClubsQuery} from "../model/slices/clubsSlice";
import {ClubCard, ClubForm} from "src/entites/Club";
import {Club} from "src/entites/Club/model/types";

export const HomePage = () => {
	const {data, error, isLoading} = useGetAllClubsQuery();
	const [createClub] = useCreateClubMutation();

	if(isLoading) {
		return <div className="text-lg font-bold text-center m-auto">Идет загрузка...</div>
	}

	if(error) {
		return <div className="text-lg font-bold text-center m-auto text-red-600/100">Возникла ошибка {error.name} - {error.message}</div>
	}

	return (
			<>
				<ClubForm handleOnSubmit={createClub} />

				{!!data && data.map((club: Club) => <ClubCard club={club} key={club.id} />)}
			</>
	);
};
