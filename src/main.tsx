import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './app/App.tsx'
import {BrowserRouter} from "react-router-dom";
import './app/styles/index.scss';
import {StoreProvider} from "./app/providers/StoreProvider";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
		<BrowserRouter>
			<StoreProvider>
				<App />
			</StoreProvider>
		</BrowserRouter>
);
