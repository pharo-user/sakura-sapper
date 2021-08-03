<script>
	import Statistics from '../components/Statistics.svelte';
	import { shop } from '../components/stores.js';

    let shop_url = 'https://'+$shop;

	function import_product() {
  
    } 

	function install_widget() {
       
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
	<button on:click|once={install_widget}>
		Install Widget
	</button>

	<button on:click|once={import_product}>
		Import Product
	</button>

    <p>click <a href={shop_url}> here</a> to go back to the shop</p>
</div>

