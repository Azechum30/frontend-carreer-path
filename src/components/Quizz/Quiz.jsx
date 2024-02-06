import PropTypes from 'prop-types';

export default function Quiz(props) {
	return (
		<div className=' bg-gray-200 flex flex-col items-center justify-center gap-y-4 p-10 text-center h-full'>
			<h1 className='text-4xl font-bold  '>Quizzical</h1>
			<p className='text-sm text-gray-600 max-w-[400px] '>
				The quiz contains 5 multiple choice questions. Kindly click on
				the button below to begin the quiz.
			</p>
			<button
				className='h-[50px] w-[200px] bg-blue-950 text-gray-200 rounded-md cursor-pointer'
				onClick={props.toggle}>
				Start Quiz
			</button>
		</div>
	);
}

Quiz.propTypes = {
	toggle: PropTypes.any,
};
