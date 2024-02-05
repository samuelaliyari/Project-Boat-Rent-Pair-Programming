import { useEffect, useState } from 'react';
import './Boats.scss';
import BoatCard from '../../components/BoatCard/BoatCard';

const Boats = () => {
	const [boats, setBoats] = useState([]);

	const fetchBoats = async () => {
		const allBoats = await fetch(
			import.meta.env.VITE_SERVER_LINK + '/boats',
		);
		const { success, result, error } = await allBoats.json();
		if (!success) console.log(error);
		else {
			setBoats(result);
			return result;
		}
	};

	useEffect(() => {
		fetchBoats();
	}, []);

	return (
		<main className='boats'>
			{boats.map((boat) => (
				<BoatCard boat={boat} />
			))}
		</main>
	);
};

export default Boats;
