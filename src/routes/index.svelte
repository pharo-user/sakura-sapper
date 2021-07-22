<script>
	import { shop } from '../components/stores.js';
</script>

<style>

    div {
        background-color: #F6F4F4;
        padding: 10%;
    }

	p {
		text-align: center;
		margin: 1em auto;
	}

	a {
	    color: #5D2828;

	}

</style>

<svelte:head>
	<title>SAKURA NETWORK Shopify App</title>
</svelte:head>
<br />
<br />
<div>
	<h2>SAKURA NETWORK App is installed</h2>
	<h3>{$shop}</h3>
	<br />
	<br />
	<p>In order to see current statistics please click
	<a href='.\login'> here </a>
	and enter your credentials</p>
	
</div>
