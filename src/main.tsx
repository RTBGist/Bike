import {createRoot} from 'react-dom/client'
import App from './app/App.tsx'
import {BrowserRouter} from "react-router-dom";
import './app/styles/index.scss';
import {StoreProvider} from "src/app/providers/StoreProvider";
import {TanStackProvider} from "src/app/providers/TanStackProvider";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
		<BrowserRouter>
			<StoreProvider>
				<TanStackProvider>
					<App />
				</TanStackProvider>
			</StoreProvider>
		</BrowserRouter>
);
