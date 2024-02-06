import ApostleJake from '../../images/aj-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Header() {
	return (
		<div className='text-center'>
			<img src={ApostleJake} className='w-full' alt='Profile picture' />
			<h3 className='text-2xl font-semibold mt-4 text-slate-200'>
				Apostle Jacob Napari
			</h3>
			<h4 className='text-yellow-100'>Founder & President</h4>
			<h5 className='text-sm'>THESCOM</h5>

			<div className='flex items-center justify-between px-10 py-4'>
				<a
					href='#'
					className='bg-slate-200 w-[50%] rounded-md py-2 text-slate-800 mr-3'>
					<FontAwesomeIcon icon={faEnvelope} className='mr-1' />
					Email
				</a>
				<a
					href='#'
					className='bg-blue-500 w-[50%] rounded-md  py-2  text-slate-200'>
					<FontAwesomeIcon icon={faLinkedin} className='mr-1' />
					LinkedIn
				</a>
			</div>
		</div>
	);
}
