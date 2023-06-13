import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 'Router' must be available in your entire app. For this reason, you need to use it as a wrapper for your components.
root.render(
	<React.StrictMode>
		<Router basename="/gitseek">
			<App />
		</Router>
	</React.StrictMode>
);