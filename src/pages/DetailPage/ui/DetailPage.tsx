import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";

import {useAppDispatch, useAppSelector} from "src/app/providers/StoreProvider";
import {
	fetchClubById,
	updateTanClub,
	ClubForm,
	getClub,
	selectClub,
	useGetCurrentClubQuery,
	useUpdateClubMutation,
	updateClub
} from "src/entites/Club";




export const DetailPage = () => {
	let {pathname} = useLocation();
	// RTK
	const club = useAppSelector(selectClub);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getClub(pathname.slice(1)))
	}, [])

	// RTK Query
	// const {data: club, isLoading} = useGetCurrentClubQuery(pathname.slice(1));
	// const [updateClub, result] = useUpdateClubMutation();

	// TanStack Query
	// getCurrentClub
	// const { data, isPending: isLoading } = useQuery({
	// 	queryKey: ['tanClubs', pathname.slice(1)],
		// queryFn: () => fetchClubById(pathname.slice(1)),
	// });
	// const {data: club} = data || '';
	// updateCurrentClub
	// const { mutate: updateClub } = useMutation(updateTanClub);


	if(false) {
		return <div className="text-lg font-bold text-center m-auto">Идет загрузка...</div>
	}

	return (
			<>
				<ClubForm {...club} handleOnSubmit={(club) => {dispatch(updateClub(club))}} id={pathname.slice(1)} />
			</>
	);
};
