import { useEffect, useState } from 'react';

function Meme() {
	const [allMemes, setAllMemes] = useState([]);
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'https://i.imgflip.com/1ur9b0.jpg',
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prev) => ({ ...prev, [name]: value }));
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		let randomNumber = Math.floor(Math.random() * allMemes?.length);
		let memeUrl = allMemes[randomNumber].url;

		setMeme((prevFormData) => ({
			...prevFormData,
			randomImage: memeUrl,
		}));
	};

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes))
			.catch((error) => console.log(error));
	}, []);
	return (
		<main className='p-10'>
			<form onSubmit={handleSubmit} className=' grid grid-cols-2 gap-8'>
				<input
					className='indent-2 py-2 border border-gray-200 rounded-md '
					type='text'
					placeholder='Top text'
					value={meme.topText}
					name='topText'
					onChange={handleChange}
				/>
				<input
					className='indent-2 py-2 border border-gray-200 rounded-md'
					type='text'
					placeholder='Bottom text'
					value={meme.bottomText}
					name='bottomText'
					onChange={handleChange}
				/>
				<button className='col-span-2 bg-gradient-to-r from-purple-800 to-purple-500 text-slate-200 border-none rounded-md py-2'>
					Get a new meme image
				</button>
			</form>

			<div className='pt-10 relative'>
				<img
					className='max-w-full'
					src={meme.randomImage}
					alt='Meme image'
				/>

				<h2 className='absolute top-20 left-auto right-auto text-4xl font-bold  text-slate-200'>
					{meme.topText}
				</h2>

				<h2 className='absolute bottom-20 left-[50%] text-4xl font-bold text-slate-200'>
					{meme.bottomText}
				</h2>
			</div>
		</main>
	);
}

export default Meme;
