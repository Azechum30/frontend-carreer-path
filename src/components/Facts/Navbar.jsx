import ReactLogo from '../images/react-log.png';

export default function Navbar() {
	return (
		<header className='bg-gray-900 text-slate-200'>
			<nav className='flex justify-between items-center p-8'>
				<div className='flex items-center gap-1'>
					<img src={ReactLogo} alt='React Logo' width={40} />
					<h2 className='font-semibold text-2xl text-cyan-400'>
						ReactFacts
					</h2>
				</div>
				<h4 className='text-lg'>React Course - Project 1</h4>
			</nav>
		</header>
	);
}
