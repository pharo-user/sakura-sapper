import { get, writable } from 'svelte/store';

function createShop() {
	const { subscribe, set } = writable(0);

	return {
		subscribe,
        setShop: (v) => set(v)
	};
}

export const shop = createShop();