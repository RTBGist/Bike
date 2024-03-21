import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "src/app/providers/StoreProvider";
import {ClubCard, ClubForm, getAllClubs, selectAllClubs, selectError, selectLoading} from "src/entites/Club";
import {Club} from "src/entites/Club/model/types";
import {createClub} from "src/entites/Club";
import {deleteClub} from "src/entites/Club";

export const RtkPage = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector(selectAllClubs);
	const isLoading = useAppSelector(selectLoading);
	const error = useAppSelector(selectError);

	useEffect(() => {
		dispatch(getAllClubs());
	}, [])

	if(isLoading) {
		return <div className="text-lg font-bold text-center m-auto">Идет загрузка...</div>
	}

	if(error) {
		return <div className="text-lg font-bold text-center m-auto text-red-600/100">Возникла ошибка {error.name} - {error.message}</div>
	}

	return (
			<>
				<ClubForm handleOnSubmit={(club) => {dispatch(createClub(club))}} />

				{!!data && data.map((club: Club) => <ClubCard onDelete={(id) => {dispatch(deleteClub(id))}} {...club} key={club.id} />)}
			</>
	);
};
