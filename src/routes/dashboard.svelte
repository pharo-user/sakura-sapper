<script>
	import Statistics from '../components/Statistics.svelte';
	import { shop } from '../components/stores.js';

    let shop_url = 'https://'+$shop;
</script>

<style>

    a {
	    color: #5D2828;

	}

    div {
        background-color: #F6F4F4;
        padding: 7%;
    }

	h1 {
		color: black;
		font-family: 'Montserrat';
		font-weight: 'bold';
		font-size: 2em;
	}

</style>
<svelte:head>
	<title>Dashboard</title>
</svelte:head>
<br />
<br />
<h1>SAKURA NETWORK</h1>
<div>
    <h2>STATISTICS</h2>
    <Statistics></Statistics>

    <p>click <a href={shop_url}> here</a> to go back to the shop</p>
</div>

