import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
	return (
		<div className='text-center bg-red-400 text-slate-200 py-3 rounded-t-lg flex items-center justify-center gap-1'>
			<FontAwesomeIcon icon={faEarthAfrica} className='text-xl' />
			<span className='text-sm tracking-tighter'>my travel journal</span>
		</div>
	);
}
