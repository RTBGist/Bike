import { Club } from '../../model/types';

export const ClubCard = ({club}: Club ) => {
	const { name, description, logo } = club;

	return (
			<div className="w-1/2 m-auto border border-slate-300 rounded-md mb-10 px-10 py-5">
				<div className="w-1/6 m-auto mb-4">
					<img src={logo} alt={name}/>
				</div>
				<div className="text-xl text-center mb-5 font-bold">{name}</div>
				<div className="text-base">{description}</div>
			</div>
	);
};

