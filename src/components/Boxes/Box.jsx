import { PropTypes } from 'prop-types';

export default function Box(props) {
	return (
		<div
			className={
				props.on
					? 'w-40 h-40 inline-block mr-2 rounded-lg border border-gray-600 bg-gray-500'
					: 'w-40 h-40 inline-block mr-2 rounded-lg border border-gray-600'
			}
			onClick={props.handleClick}></div>
	);
}

Box.propTypes = {
	targetId: PropTypes.number,
	on: PropTypes.bool,
	handleClick: PropTypes.func,
};
