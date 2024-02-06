import { useEffect, useState } from 'react';
import Die from './components/Tenzies/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App() {
	const [dice, setDices] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);

	useEffect(() => {
		const allHeld = dice.every((die) => die.isHeld);
		const firstValue = dice[0].value;
		const allSameValue = dice.every((die) => die.value === firstValue);
		if (allHeld && allSameValue) {
			setTenzies(true);
		}
	}, [dice]);

	function generateNewDie() {
		return {
			id: nanoid(),
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
		};
	}

	function allNewDice() {
		let newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push(generateNewDie());
		}
		return newDice;
	}

	function rollDices() {
		if (!tenzies) {
			setDices((oldDice) =>
				oldDice.map((die) => {
					return die.isHeld ? die : generateNewDie();
				}),
			);
		} else {
			setTenzies(false);
			setDices(allNewDice());
		}
	}

	function holdDice(id) {
		setDices((prevDice) =>
			prevDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			}),
		);
	}

	const diceElements = dice.map((die) => (
		<Die
			key={die.id}
			value={die.value}
			isHeld={die.isHeld}
			holdDice={() => holdDice(die.id)}
		/>
	));

	return (
		<div className='w-6/12 mx-auto bg-blue-900  p-10'>
			{tenzies && <Confetti />}
			<div className='bg-gray-200 w-full rounded-xl h-[500px] flex flex-col items-center justify-evenly'>
				<div className='max-w-[400px] mx-auto text-center'>
					<h2 className='text-4xl font-bold'>Tenzies</h2>
					<p className='text-lg text-gray-600'>
						Roll until all Dice are the same. Click each die to
						freeze it as its current value between rolls.
					</p>
					{tenzies && (
						<h3 className='text-5xl font-bold'>
							You&apos;ve won!{' '}
						</h3>
					)}
				</div>
				<main className='grid grid-cols-5 place-items-center place-content-center gap-8'>
					{diceElements}
				</main>
				<button
					className='w-[150px] h-[50px] bg-blue-500 text-slate-100 cursor-pointer rounded-md font-display text-xl font-semibold'
					onClick={rollDices}>
					{tenzies ? 'New Game' : 'Roll'}
				</button>
			</div>
		</div>
	);
}

export default App;
