import {useEffect, useState} from "react";

type createClubProps = Omit<ClubFormProps, "handleOnSubmit">

interface ClubFormProps {
	id?: string,
	name?: string,
	description?: string,
	logo?: string,
	handleOnSubmit?: (props: createClubProps) => void,
}

export const ClubForm = (props: ClubFormProps) => {
	const {handleOnSubmit, description, name, logo, id} = props;
	const [form, setForm] = useState({
		description,
		name,
		logo
	})

	useEffect(() => {
		setForm((prev) => ({...form, description, name, logo}))
	}, [description, name, logo])

	const handleOnChange = (e) => {
		setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
	}

	const onSendForm = (e) => {
		e.preventDefault();

		handleOnSubmit?.({id, ...form})

		// clear inputs
		setForm({
			description: '',
			name: '',
			logo: ''
		})
	};

	return (
			<form onSubmit={onSendForm} className="w-1/2 m-auto border border-slate-300 rounded-md mb-10 px-10 py-5">
				<div>
					<input placeholder="Название клуба" className="border-b border-sky-400 w-full py-2 mb-2 outline-none" onChange={handleOnChange} type="text" name="name" value={form.name}/>
				</div>
				<div>
					<input placeholder="Описание клуба" className="border-b border-sky-400 w-full py-2 mb-2 outline-none" onChange={handleOnChange} type="text" name="description" value={form.description}/>
				</div>
				<div>
					<input placeholder="Ссылка на лого" className="border-b border-sky-400 w-full py-2 mb-10 outline-none" onChange={handleOnChange} type="text" name="logo" value={form.logo}/>
				</div>

				<div className="flex justify-end">
					<button className="border px-6 py-2 bg-lime-400 border-lime-400 text-white rounded-sm" type="submit">Отправить</button>
				</div>
			</form>
	);
};