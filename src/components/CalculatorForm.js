import React, { useState } from 'react';

function CalculatorForm({ onSubmit }) {
	const [length, setLength] = useState('');
	const [width, setWidth] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ length, width, height, weight });
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-wrap lg:flex-no-wrap w-full">
			<div className="rounded-lg divide-y lg:divide-y-0 lg:divide-x">
				<input
					type="number"
					placeholder="Length"
					className="w-full lg:w-auto p-6 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg"
					value={length}
					onChange={(e) => setLength(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Width"
					className="w-full lg:w-auto p-6"
					value={width}
					onChange={(e) => setWidth(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Height"
					className="w-full lg:w-auto p-6"
					value={height}
					onChange={(e) => setHeight(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Weight"
					className="w-full lg:w-auto p-6 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg"
					value={weight}
					onChange={(e) => setWeight(e.target.value)}
				/>
			</div>
			<button type="submit" className="w-full my-4 lg:my-0 lg:w-auto bg-green-500 rounded-lg border-b-4 border-green-600 focus:border-t-4 focus:border-b-0 focus:shadow-inner mx-0 lg:mx-2 p-4 font-bold text-white hover:bg-green-400">Find Product</button>
		</form>
	);
}

export default CalculatorForm;
