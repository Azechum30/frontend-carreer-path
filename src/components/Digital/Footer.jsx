import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<div className='bg-gray-900 text-slate-300 py-4 px-10 flex justify-evenly items-center'>
			<FontAwesomeIcon icon={faFacebook} className='text-xl' />
			<FontAwesomeIcon icon={faYoutube} className='text-xl' />
			<FontAwesomeIcon icon={faTwitter} className='text-xl' />
			<FontAwesomeIcon icon={faInstagram} className='text-xl' />
			<FontAwesomeIcon icon={faLinkedin} className='text-xl' />
			<FontAwesomeIcon icon={faGithub} className='text-xl' />
		</div>
	);
}
