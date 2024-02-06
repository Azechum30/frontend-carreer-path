import React from 'react';

export default function Form() {
	const [formData, setFormData] = React.useState({
		email: '',
		password: '',
		confirmPassword: '',
		newsLetter: false,
	});

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;

		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (formData.newsLetter) {
			console.log('Thank you for signing up for our newsletter!');
		}
		if (formData.password === formData.confirmPassword) {
			console.log('Successfully signed up!');
		} else {
			console.log('Passwords do not match!');
		}
	};

	return (
		<div className='h-screen flex items-center justify-center'>
			<form
				onSubmit={handleSubmit}
				className='bg-gray-200 text-gray-500 p-10'>
				<div className='flex flex-col mb-4'>
					<label className='mb-2' htmlFor='email'>
						Email
					</label>
					<input
						className='indent-4 text-sm py-1 border border-gray-400 rounded-md'
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className='flex flex-col mb-4'>
					<label className='mb-2' htmlFor='password'>
						Password
					</label>
					<input
						className='indent-4 text-sm py-1 border border-gray-400 rounded-md'
						type='password'
						id='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
					/>
				</div>
				<div className='flex flex-col mb-4'>
					<label className='mb-2' htmlFor='confirmPassword'>
						Confirm Password
					</label>
					<input
						className='indent-4 text-sm py-1 border border-gray-400 rounded-md'
						type='password'
						id='confirmPassword'
						name='confirmPassword'
						value={formData.confirmPassword}
						onChange={handleChange}
					/>
				</div>
				<div className='flex items-center mb-4'>
					<input
						className='mr-2 indent-4 text-sm py-1 border border-gray-400 rounded-md'
						type='checkbox'
						id='newsLetter'
						name='newsLetter'
						checked={formData.newsLetter}
						onChange={handleChange}
					/>
					<label htmlFor='newsLetter'>Subscribe to newsletter</label>
				</div>
				<div className='flex items-center mb-4'>
					<button className='w-full bg-violet-500 text-slate-200 rounded-md cursor-pointer py-1 hover:bg-violet-800 transition duration-500'>
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
}
