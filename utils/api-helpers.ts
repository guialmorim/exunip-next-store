import { GET_ORDERS, POST_ORDER } from '@/config/api/endpoints';

export async function fetchGetJSON(endpoint: string) {
	try {
		const data = await fetch(endpoint);
		if (!data) return null;
		const json = await data.json();
		return json;
	} catch (err) {
		throw new Error(err);
	}
}

export async function fetchPostJSON(
	endpoint: string,
	method: string,
	data?: {}
) {
	try {
		// Default options are marked with *
		const response = await fetch(endpoint, {
			method: method, // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *client
			body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
		});
		return await response.json(); // parses JSON response into native JavaScript objects
	} catch (err) {
		throw new Error(err.message);
	}
}

export async function handleCreateOrder(
	user: string,
	address: string,
	products: string[]
) {
	const endpoint = `${POST_ORDER}`;
	const response = await fetchPostJSON(endpoint, 'POST', {
		paid: false,
		user: user,
		address: address,
		products: products,
	});
	return response;
}

export async function handleUpdateOrder(orderId: string, paid: true | false) {
	const endpoint = `${GET_ORDERS}${orderId}`;
	const response = await fetchPostJSON(endpoint, 'PUT', {
		paid: paid,
	});
	return response;
}
