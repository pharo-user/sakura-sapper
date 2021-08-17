import { writable } from 'svelte/store';

function createShop() {
	const { subscribe, set } = writable(0);

	return {
		subscribe,
        setShop: (v) => set(v)
	};
}

function createCompany() {
	const { subscribe, set } = writable(0);

	return {
		subscribe,
        setCompany: (v) => set(v)
	};
}

export const shop = createShop();
export const company = createCompany();