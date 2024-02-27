import {useState} from "react";

interface ClubFormProps {
	id?: string,
	name?: string,
	description?: string,
	logo?: string,
}

export const ClubForm = (props: ClubFormProps) => {
	const {description = 'testdescr', name = 'testname', logo = 'testlogo'} = props;

	const [form, setForm] = useState({
		description,
		name,
		logo
	})

	const handleOnChange = (e) => {
		setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();

		console.log(form);
	};

	return (
			<form onSubmit={handleOnSubmit} className="w-1/2 m-auto border border-slate-300 rounded-md mb-10 px-10 py-5">
				<div>
					<input onChange={handleOnChange} type="text" name="name" value={form.name}/>
				</div>
				<div>
					<input onChange={handleOnChange} type="text" name="description" value={form.description}/>
				</div>
				<div>
					<input onChange={handleOnChange} type="text" name="logo" value={form.logo}/>
				</div>

				<button type="submit">Отправить</button>
			</form>
	);
};