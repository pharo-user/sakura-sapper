import * as sapper from '@sapper/app';
import { shop } from './components/stores.js';
const urlParams = new URLSearchParams(window.location.search);

sapper.start({

	target: document.querySelector('#sapper')
}).then(() => {
	// get the shop id from the url and save it using a store
	console.log('client-side app has started');
	let shop_id = urlParams.get('shop');
	if (shop_id == undefined) {
		shop_id = 'demo/myshopify.com';
	}
	shop.setShop(shop_id);
	console.log('shop '+shop_id);
});