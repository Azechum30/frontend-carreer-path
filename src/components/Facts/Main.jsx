import { facts } from '../../data';

export default function Main() {
	return (
		<div className=' text-slate-200 py-14 px-10 h-[550px]  bg-gray-800 bg-react-logo-large bg-blend-overlay bg-no-repeat main'>
			<h1 className='text-4xl font-bold mb-10 tracking-tight'>
				Fun facts about React
			</h1>
			<ul className='ml-14 list-disc marker:text-cyan-400 marker:text-2xl max-w-[400px]'>
				{facts.map((fact, index) => (
					<li key={index} className='py-1 leading-5'>
						{fact}
					</li>
				))}
			</ul>
		</div>
	);
}
