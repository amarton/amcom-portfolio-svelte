<!-- src/routes/Projects.svelte -->
<svelte:head>
	<title>Projects</title>
</svelte:head>


<script context="module">
    export const load = async ({ fetch }) => {
        const res = await fetch("../port.json");
        const projects = await res.json();
        return {
            props: {
                projects,
            }
        }
    }
 
</script>

<script>
    export let projects; 
</script>



        {#each projects as project}
            <h2>{project.title}</h2>
            <p>{project.body}</p>
        {/each}

