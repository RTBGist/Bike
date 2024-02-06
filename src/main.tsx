import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './app/App.tsx'
import {BrowserRouter} from "react-router-dom";
import './app/styles/index.scss';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
);
