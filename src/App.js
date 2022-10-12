import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import McqContainer from './components/McqContainer/McqContainer';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import Graph from './components/Graph/Graph';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path='quiz/:id' element={<McqContainer />} />
				<Route path='blog' element={<Blog />} />
				<Route path='graph' element={<Graph />} />
        <Route path='*' element={<NotFound />}  />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
