export const getTanClubs = {
	queryKey: ['tanClubs'],
	queryFn: () =>
		fetch('http://localhost:8000/clubs').then((res) =>
				res.json(),
		),
}