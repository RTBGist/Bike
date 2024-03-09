import {useLocation} from "react-router-dom";
import {ClubForm} from "src/entites/Club";
import {useGetCurrentClubQuery, useUpdateClubMutation} from "src/entites/Club/model/slices/clubsSlice";
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchClubById, updateTanClub} from "src/entites/Club/model/tanStack/tanStackFunctions";

export const DetailPage = () => {
	let {pathname} = useLocation();

	// RTK Query
	// const {data: club, isLoading} = useGetCurrentClubQuery(pathname.slice(1));
	// const [updateClub, result] = useUpdateClubMutation();

	// TanStack Query
	// getCurrentClub
	const { data, isPending: isLoading } = useQuery({
		queryKey: ['tanClubs', pathname.slice(1)],
		queryFn: () => fetchClubById(pathname.slice(1)),
	});
	const {data: club} = data || '';
	// updateCurrentClub
	const { mutate: updateClub } = useMutation(updateTanClub);


	if(isLoading) {
		return <div className="text-lg font-bold text-center m-auto">Идет загрузка...</div>
	}

	return (
			<>
				<ClubForm {...club} handleOnSubmit={updateClub} id={pathname.slice(1)} />
			</>
	);
};
