import './stylesheet/index.css';
import Home from './pages/Home';
import User from './pages/User.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
		<main>
			<Routes >
				<Route exact path="/" element={<Home />} />
				<Route exact path="/:user" element={<User />} /> 
			</Routes>
		</main>
    </>
  );
}

export default App;
