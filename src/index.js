/**
 * MAKING YOUR PAGES WORK IN GITHUB PAGES:
 * 
 * Step 1:
 * 
 * Use HashRouter instead of BrowserRouter: GitHub Pages doesn't handle client-side routing (using the HTML5 History API) 
 * very well. To work around this, you can switch from using 'BrowserRouter' to 'HashRouter' from the react-router-dom package. 
 * 
 * import { HashRouter as Router } from 'react-router-dom';
 * 
 * HashRouter uses the URL hash to manage routes, which works better with GitHub Pages. Update your routing setup in your 
 * App.js or index.js file to use HashRouter instead.
 * 
 * NOTE: =>> Since you are using a HashRouter, the basename prop is not necessary in the main <Router ></Router>
 * 
 * Step 2:
 * 
 * Update your links in your page files: Since you're using HashRouter, you need to update your links to use the 'to' prop
 *  as well as href.
 * 
 * Step 3: 
 * 
 * For redirection, you should use the useNavigate hook from react-router-dom.
 * import { useNavigate } from 'react-router-dom';
 * const navigate = useNavigate();
 * navigate(`/${param}`);
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 'Router' must be available in your entire app. For this reason, you need to use it as a wrapper for your components.
root.render(
	<React.StrictMode>
		<Router >
			<App />
		</Router>
	</React.StrictMode>
);