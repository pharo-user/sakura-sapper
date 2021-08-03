<script>
	//import Statistics from '../components/Statistics.svelte';
	import { doImportArticles } from './_import';
	import { doInstallWidget } from './_widget';

	import { shop } from '../components/stores.js';
	
	import promiser from '../components/promiser.js'
	import LoadingIndicator from '../components/LoadingIndicator.svelte'
	let loading = false

    let shop_url = 'https://'+$shop;

	async function import_product() {
		console.log('import');
        let r = await doImportProduct(shop);
        console.log(r);
        if (r.status == 'success') {
            goto('./dashboard');
        } else {
            goto('./');
        }
    } 

	async function install_widget() {
		console.log('install');
        let r = await doInstallWidget(shop);
        console.log(r);
        if (r.status == 'success') {
            goto('./dashboard');
        } else {
            goto('./');
        }
       
    } 

	async function delay(){
	return await new Promise(resolve => setTimeout(resolve, 3000))
}



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
	button {
	   font-family: 'Montserrat';
	   text-transform: uppercase;
       border: none;
       background-color: #5D2828;
       color: white;
       height: 50%;
       width: 86%;
       cursor: pointer;
       padding: 12px 20px;
       margin: 8px 0;
	}

    button:hover {
       background-color: #893838;
    }

     button:active {
       background-color: #5D2828;
     }

</style>
<svelte:head>
	<title>Dashboard</title>
</svelte:head>
<br />
<br />

<div>
	<h1>SAKURA NETWORK</h1>
	<!--
    <h2>STATISTICS</h2>
    <Statistics></Statistics>
	-->
	<button on:click={ ()=>promiser(install_widget(), status => loading = status)}>
		Install Widget
	</button>

	<button on:click={ ()=>promiser(import_product(), status => loading = status)}>
		Import Product
	</button>
	<div>
		{#if loading}
		<LoadingIndicator/>
		{/if}
	
	</div>
	
    <p>click <a href={shop_url}> here</a> to go back to the shop</p>
</div>

