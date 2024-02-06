import Quiz from './components/Quizz/Quiz';
import { useState } from 'react';

function App() {
	const [show, setShow] = useState(true);

	function showQuestions() {
		setShow(false);
	}
	return (
		<div className='w-6/12 mx-auto bg-blue-900 p-10 h-screen'>
			{show && <Quiz toggle={showQuestions} />}
		</div>
	);
}

export default App;
