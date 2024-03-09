import {useMutation, useQuery} from "@tanstack/react-query";

import {ClubCard, ClubForm, getTanClubs} from "src/entites/Club";
import {Club} from "src/entites/Club/model/types";
import {createTanClub, deleteTanClub} from "src/entites/Club/model/tanStack/tanStackFunctions";

export const TanStackPage = () => {
	const { isPending: isLoading, error, data } = useQuery(getTanClubs);
	const { mutate: createClub, isPending: isCreating, error: createError } = useMutation(createTanClub);
	const { mutate: deleteClub, isPending: isDeleting, error: deleteError } = useMutation(deleteTanClub);

	if(isLoading || isCreating || isDeleting) {
		return <div className="text-lg font-bold text-center m-auto">Идет загрузка...</div>
	}

	if(error || createError || deleteError) {
		return <div
				className="text-lg font-bold text-center m-auto text-red-600/100"
		>
			Возникла ошибка {error?.name || createError?.name || deleteError?.name} - {error?.message || createError?.message || deleteError?.message}
		</div>
	}

	return (
			<>
				<ClubForm handleOnSubmit={createClub} />

				{!!data && data.map((club: Club) => <ClubCard logo={club.logo} id={club.id} name={club.name} description={club.description} onDelete={deleteClub} />)}
			</>
	);
};
