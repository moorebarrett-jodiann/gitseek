import './stylesheet/index.css';
import Home from './pages/Home';
import User from './pages/User.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
		<div className="overlay"></div>
      	<main className="main-content">
			<Routes >
				<Route path="/" element={<Home />} />
				<Route path="/:user" element={<User />} /> 
			</Routes>
		</main>
    </>
  );
}

export default App;
