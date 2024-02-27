import {Routes, Route, NavLink} from 'react-router-dom'
import {HomePage} from "src/pages/HomePage";
import {TanStackPage} from "src/pages/TanStackPage";



const App = () => {
	return (
			<main className="h-screen">
				<nav className="w-full bg-sky-400 py-3 px-3 mb-6">
					<ul className="flex justify-center gap-4">
						<li>
							<NavLink
									to="/"
									className={({ isActive }) => (isActive ? 'font-bold text-white' : 'transition-all text-white/75 hover:text-white')}
							>
								RTK Query
							</NavLink>
						</li>
						<li>
							<NavLink
									className={({ isActive }) => (isActive ? 'font-bold text-white' : 'transition-all text-white/75 hover:text-white')}
									to="/tan"
							>
								TanStack Query
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='*' element={<HomePage />}></Route>
					<Route path='/tan' element={<TanStackPage />}></Route>
				</Routes>
			</main>
	);
};

export default App;