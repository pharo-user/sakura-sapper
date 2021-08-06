<script>
    import { articlesCount, articlesGet } from './products';
    import { onMount } from 'svelte';

    let items, nItems;

    onMount(async () => {
        nItems = articlesCount();
        if (nItems > 0 ) {

        } else {

        }
        items = await articlesGet(0, 10);
    });

</script>
<h2>Articles</h2>
<ul>
	{#each items as { id, name }, i}
		<li>
			{i + 1}: {name}
		</li>
	{/each}
</ul>