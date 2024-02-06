import Meme from '../../images/meme.png';

function Header() {
	return (
		<header className='bg-gradient-to-r from-purple-800 to-purple-500 flex items-center px-8 py-5 text-slate-200'>
			<img className='w-[30px] mr-2' src={Meme} alt='Meme Image' />
			<h3 className='text-2xl font-semibold  mr-auto'>Meme Generator</h3>
			<h4 className='text-sm'>React Course - Project 3</h4>
		</header>
	);
}

export default Header;
