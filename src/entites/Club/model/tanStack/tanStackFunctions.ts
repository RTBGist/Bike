import {Club} from "../../model/types/index";
import axios from "axios";
import {queryClient} from "src/app/providers/TanStackProvider/config/store";

export const getTanClubs = {
	queryKey: ['tanClubs'], // объявляем ключ запроса, чтоб потом по нему инвалидировать кэш и сделать рефетч
	queryFn: () =>
			fetch('http://localhost:8000/clubs').then((res) =>
					res.json(),
			),
}

export const createTanClub = {
	mutationFn: (club: Club) => {
		return axios.post('http://localhost:8000/clubs', club)
	},
	onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: ['tanClubs'] }).then(() => {console.log('clubs refetched!')}) // refetch all clubs on success create new club
	}
}

export const fetchClubById = async (id: string) => {
	return axios.get(`http://localhost:8000/clubs/${id}`)
}

export const deleteTanClub = {
	mutationFn: (id: string) => {
		return axios.delete(`http://localhost:8000/clubs/${id}`)
	},
	onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: ['tanClubs'] }).then(() => {console.log('clubs refetched!')}) // refetch all clubs on success create new club
	}
}

export const updateTanClub = {
	mutationFn: (club: Club) => {
		return axios.put(`http://localhost:8000/clubs/${club.id}`, club)
	},
	onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: ['tanClubs'] }).then(() => {console.log('clubs refetched!')}) // refetch all clubs on success create new club
	}
}