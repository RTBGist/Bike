import {useQuery} from "@tanstack/react-query";
import {getTanClubs} from "../model/getTanClubs/getTanClubs";

import {ClubCard} from "src/entites/Club";
import {Club} from "src/entites/Club/model/types";

export const TanStackPage = () => {
	const { isPending, error, data } = useQuery(getTanClubs);

	if(isPending) {
		return <div className="text-lg font-bold text-center m-auto">Идет загрузка...</div>
	}

	if(error) {
		return <div
				className="text-lg font-bold text-center m-auto text-red-600/100"
		>
			Возникла ошибка {error.name} - {error.message}
		</div>
	}

	return (
			<div>
				{!!data && data.map((club: Club) => <ClubCard club={club} key={club.id} />)}
			</div>
	);
};