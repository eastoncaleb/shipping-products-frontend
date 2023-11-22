// src/components/CalculatorModal.js

import React, { useState } from 'react';
import { findProduct } from '../services/productService';
import CalculatorForm from './CalculatorForm';

function CalculatorModal({ onClose, onCalculate }) {
	const [error, setError] = useState('');
	const [productName, setProductName] = useState('');

	const handleSubmit = async (dimensions) => {
		setError(''); // Reset error state on new submission
		setProductName(''); // Reset product name on new submission
		try {
			const product = await findProduct(dimensions);
			if (product && product.name) {
				setProductName(product.name); // Store product name
				setTimeout(() => {
					onCalculate(product.name); // Pass product name up after 5 seconds
					onClose(); // Close the modal
				}, 5000)
			} else {
				setError('No matching product found');
			}
		} catch (error) {
			setError('Failed to fetch product');
		}
	};

	return (
		<div className="modal fixed my-10 mx-4 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 rounded-lg pt-10 px-10 pb-12 shadow-lg">
			<button className="absolute top-2 right-2 font-semibold text-lg rounded-full px-2 bg-gray-200 hover:bg-gray-100 mb-2 text-gray-500" onClick={onClose}>X</button>
			<h2 className="text-white text-2xl lg:text-4xl font-bold text-shadow shadow-gray-700">Product Calculator</h2>
			<p className="mb-4 text-white font-semibold text-shadow shadow-gray-700">Please enter the dimensions of the item you are wanting to ship</p>
			<CalculatorForm onSubmit={handleSubmit} />
			{error && <p className="text-shadow shadow-gray-700 text-center text-white underline decoration-solid decoration-red-500 underline-offset-4 decoration-4 font-bold mt-8">{error}</p>}
			{productName && <p data-testid="recommended-product-modal" className="text-shadow shadow-gray-700 product-name text-center text-white font-bold mt-8 text-xl lg:text-2xl">Use this: <span className="underline decoration-wavy decoration-green-500 underline-offset-8">{productName}</span></p>}
		</div>
	);
}

export default CalculatorModal;
