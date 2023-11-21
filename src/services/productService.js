const API_URL = 'http://localhost:3000/api/v1/products/match';

export const findProduct = async (dimensions) => {
	try {
		const queryParams = new URLSearchParams(dimensions).toString();
		const response = await fetch(`${API_URL}?${queryParams}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		throw error;
	}
};
