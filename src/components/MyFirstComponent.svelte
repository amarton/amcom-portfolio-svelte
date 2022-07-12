<script>
    // we write export let to say that this is a property
    // that means we can change it later!
    export let x = 0;
    const addToCounter = function() {
        ++x;
    }
</script>



<button id="counter" on:click="{addToCounter}">{x}</button>

<!-- add an if then statement based onc clicks -->
{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}

<style>
    button {
        background: #ffb334;
        border-radius: 8px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        padding: 0.5rem 2rem;
        color: white;
        font-size: 1.5rem;
    }
</style>
