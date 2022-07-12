<script>
    let x = 0;
    $: bigX = x * 2;
    const addToCounter = function() {
        ++x;
    }
</script>

<button id="counter" on:click="{addToCounter}">{bigX}</button>

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
