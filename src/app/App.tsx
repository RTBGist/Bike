import {Routes, Route, Link} from 'react-router-dom'
import {HomePage} from "src/pages/HomePage";
import {TanStackPage} from "src/pages/TanStackPage";



const App = () => {
	return (
			<main className="h-screen">
				<nav>
					<ul>
						<li>
							<Link to="/">RTK Query</Link>
						</li>
						<li>
							<Link to="/tan">TanStack Query</Link>
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