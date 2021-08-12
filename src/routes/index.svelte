<script>
	import { shop } from '../components/stores.js';
	import env from '../components/env.js';
</script>

<style>

	div {
		margin-top: 4em;
        background-color: #F6F4F4;
        padding: 7%;
    }

	h1 {
		color: black;
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 2em;
		margin-bottom: 1em;
	}

	h2 {
		color: black;
		font-family: 'Montserrat';
		font-weight: normal;
		font-size: 1.5em;
		margin-bottom: 1em;
	}

	p,li {
		//text-align: center;
		margin: 1em auto;
	}

	a {
	    color: #5D2828;

	}

</style>

<svelte:head>
	<title>SAKURA NETWORK Shopify App</title>
</svelte:head>

<div>
	<h1>SAKURA NETWORK</h1>
	<h2>Congratulations, this App was succesfully installed !</h2> 
	<p>Please click
	<a href='./login'> here </a>
	and enter your credentials.</p>
	<p> After the <b>Sign In</b> you can use this App in order to:</p>
	<ul>
	<li> track your sales generated from visits to <a href={env.sakura_url}>Sakura.eco</a></li>
	{#if env.flag_import}
	<li>import products from your shop <b>{$shop}</b></li>
	{/if}

	{#if env.flag_widget}
	<li> install our widget in your shop <b>{$shop}></b></li>
	{/if}
	</ul>
</div>
