import { useContext } from 'react';
import './Bookings.scss';
import { DataContext } from '../../context/Context';

const Bookings = () => {
	const { bookings, setBookings } = useContext(DataContext);

	return (
		<main className='bookings'>
			<h1>Bookings</h1>
			{bookings.map((booking) => (
				<h3>{booking.email}</h3>
			))}
		</main>
	);
};

export default Bookings;
