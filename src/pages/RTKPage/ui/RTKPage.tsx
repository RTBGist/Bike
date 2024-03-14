import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "src/app/providers/StoreProvider";
import {ClubCard, ClubForm, getAllClubs, selectAllClubs} from "src/entites/Club";
import {Club} from "src/entites/Club/model/types";
import {createClub} from "src/entites/Club";
import {deleteClub} from "src/entites/Club";

export const RtkPage = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector(selectAllClubs);

	useEffect(() => {
		dispatch(getAllClubs());
	}, [])

	return (
			<>
				<ClubForm handleOnSubmit={(club) => {dispatch(createClub(club))}} />

				{!!data && data.map((club: Club) => <ClubCard onDelete={(id) => {dispatch(deleteClub(id))}} {...club} key={club.id} />)}
			</>
	);
};
