import {Routes, Route, Link} from 'react-router-dom'
import {HomePage} from "src/pages/HomePage";
import {SearchPage} from "src/pages/SearchPage";


const App = () => {
	return (
			<main className="h-screen">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/search">Search</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='*' element={<HomePage />}></Route>
					<Route path='/search' element={<SearchPage />}></Route>
				</Routes>
			</main>
	);
};

export default App;