import {useLocation} from "react-router-dom";
import {ClubForm} from "src/entites/Club";
import {useGetCurrentClubQuery, useUpdateClubMutation} from "src/entites/Club/model/slices/clubsSlice";

export const DetailPage = () => {
	let {pathname} = useLocation();
	const {data: club, isLoading} = useGetCurrentClubQuery(pathname.slice(1));
	const [updateClub, result] = useUpdateClubMutation();

	if(isLoading) {
		return <div className="text-lg font-bold text-center m-auto">Идет загрузка...</div>
	}

	return (
			<>
				<ClubForm {...club} handleOnSubmit={updateClub} id={pathname.slice(1)} />
			</>
	);
};
