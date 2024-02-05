import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Boats from './pages/Boats/Boats';
import BoatDetail from './pages/Boats/DetailPage/BoatDetail';
import Bookings from './pages/Bookings/Bookings';
import BookingDetail from './pages/Bookings/DetailPage/BookingDetail';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/boats'
					element={<Boats />}
				/>
				<Route
					path='/boat/:boatid'
					element={<BoatDetail />}
				/>
				<Route
					path='/bookings'
					element={<Bookings />}
				/>
				<Route
					path='/booking/:bookingid'
					element={<BookingDetail />}
				/>
			</Routes>
		</>
	);
}

export default App;
