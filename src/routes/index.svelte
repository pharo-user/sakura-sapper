<script>
	import { shop } from '../components/stores.js';

	let flag_import;

</script>

<style>

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
	<h1>SAKURA NETWORK</h1>
	
	<br />
	<p>App succesfully installed</p> 
	<p>Please click
	<a href='./login'> here </a>
	and enter your credentials</p>
	<p> then you can use this app to import products</p>
	<!--
	<p> and to install our widget in your shop {$shop}</p>
	-->
	
</div>
