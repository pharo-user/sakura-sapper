<script>
	import Statistics from '../components/Statistics.svelte';
</script>

<style>

    div {
        background-color: #F6F4F4;
        padding: 7%;
    }

    div div {
        background-color: #F6F4F4;
        padding: 0 0;
        margin: 0 0;
    }

    /*:global(body){
         background: #F6F4F4;
    }*/

	h1 {
		color: black;
		font-family: 'Montserrat';
		font-weight: 'bold';
		font-size: 2em;
	}

</style>
<svelte:head>
	<title>About</title>
</svelte:head>
<br />
<br />
<h1>SAKURA NETWORK</h1>
<div>
    <h2>STATISTICS</h2>
    <Statistics></Statistics>
</div>

