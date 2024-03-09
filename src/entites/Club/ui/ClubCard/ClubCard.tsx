import {Link} from "react-router-dom";

interface ClubProps {
	name: string,
	description: string,
	logo: string,
	id: string,
	onDelete: (id: string) => void,
}

export const ClubCard = (props: ClubProps ) => {
	const { name, description, logo, id, onDelete} = props;

	return (
			<div className="w-1/2 m-auto border border-slate-300 rounded-md mb-10 px-10 py-5 relative">
				<div className="w-1/6 m-auto mb-4">
					<img src={logo} alt={name}/>
				</div>
				<div className="text-xl text-center mb-5 font-bold">{name}</div>
				<div className="text-base">{description}</div>
				<div className="absolute top-2 right-2 flex">
					<Link className="rounded-lg border py-1 px-4 border-cyan-400 bg-cyan-400 text-white mr-2" to={`/${id}`}>Изменить</Link>
					<button onClick={() => {onDelete(id)}} className="rounded-lg border py-1 px-4 border-red-600 bg-red-600 text-white">Удалить</button>
				</div>
			</div>
	);
};

