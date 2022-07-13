<!-- src/routes/Projects.svelte -->
<svelte:head>
	<title>Projects</title>
</svelte:head>


<script context="module">
    export const load = async ({ fetch }) => {
        const res = await fetch("https://amarton.github.io/amcom-portfolio-svelte/static/port.json");
        const projects = await res.json();
        return {
            props: {
                projects,
            }
        }
    }
 
</script>

<script>
    export let projects = [];

    let id = '';
    $: project = projects.find(p => p.id == id);
</script>




<label>
    Project
    <select bind:value={id}>
        <option />
        {#each projects as p}
            <option value={p.id} label={p.title} />
        {/each}
    </select>
</label>

{#if project}
    <h2>{project.title}</h2>
    <p>{project.body}</p>
{/if}