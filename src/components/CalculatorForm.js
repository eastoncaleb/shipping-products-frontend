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
		<form onSubmit={handleSubmit} className="flex">
			<div className="rounded-lg">
				<input
					type="number"
					placeholder="Length"
					className="p-6 rounded-l-lg border"
					value={length}
					onChange={(e) => setLength(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Width"
					className="p-6 border"
					value={width}
					onChange={(e) => setWidth(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Height"
					className="p-6 border"
					value={height}
					onChange={(e) => setHeight(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Weight"
					className="p-6 rounded-r-lg border"
					value={weight}
					onChange={(e) => setWeight(e.target.value)}
				/>
			</div>
			<button type="submit" className="bg-green-500 rounded-lg borde-2 border-b-4 border-green-600 mx-2 p-4 font-bold text-white hover:bg-green-400">Find Product</button>
		</form>
	);
}

export default CalculatorForm;
