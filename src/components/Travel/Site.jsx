import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function Site(props) {
	return (
		<div className='flex gap-8 mb-10 bg-gray-200 p-5 rounded-md hover:shadow-lg cursor-pointer'>
			<img
				className='w-[40%] rounded-md'
				src={props.imageUrl}
				alt={`The image of ${props.title}`}
			/>
			<div className='w-[60%]'>
				<div>
					<span className='uppercase text-[12px] tracking-widest mr-2'>
						<FontAwesomeIcon
							icon={faLocationDot}
							className='mr-1'
						/>{' '}
						{props.location}
					</span>
					<a
						className='text-[12px] text-gray-500'
						href={props.googleMapsUrl}>
						View in Google Maps
					</a>
				</div>
				<h3 className='text-2xl font-semibold mb-5'>{props.title}</h3>
				<div className='text-sm font-semibold'>
					<span>{props.startDate}</span> -{' '}
					<span>{props.endDate}</span>
				</div>
				<p className='text-[12px] text-gray-600'>{props.description}</p>
			</div>
		</div>
	);
}

Site.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	startDate: PropTypes.string,
	endDate: PropTypes.string,
	description: PropTypes.string,
	location: PropTypes.string,
	googleMapsUrl: PropTypes.string,
};
