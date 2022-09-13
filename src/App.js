import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import NavBar from './components/common/NavBar';
import Counter from './components/Counter';
import Home from './components/Home';
import Todo from './components/Todo';

function App() {
	return (
		<div className='App'>
			<NavBar></NavBar>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/counter' element={<Counter />} />
				<Route path='/todo' element={<Todo />} />
			</Routes>
		</div>
	);
}

export default App;
