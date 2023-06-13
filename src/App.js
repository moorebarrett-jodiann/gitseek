import './stylesheet/index.css';
import Home from './pages/Home';
import User from './pages/User.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
		<main>
			<Routes >
				<Route path="/" element={<Home />} />
				<Route path="/:user" element={<User />} /> 
			</Routes>
		</main>
    </>
  );
}

export default App;
