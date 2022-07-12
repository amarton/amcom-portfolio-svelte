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
    export let projects; 
</script>


<div class="container">
    <h1>My Projects</h1> 

    <div class="blogposts">
        {#each projects as project}
        <div class="post">
            <h2>{project.title}</h2>
            <p>{project.body.substring(0, 80)}</p>
            <p class="readmore"><a style=" color: rgb(10, 10, 139);" href={`/portfolio/${project.id}`}>Read More</a></p>
        </div> 
        {/each}
    </div>
</div>



<style>
    .container {
        max-width: 800px;
        margin: 50px auto;
    }
    .blogposts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    .post {
        border: 1px solid #ddd;
        padding: 10px;
    }
    h2 {
        margin: 0;
    }
    .readmore {
        color: rgb(10, 10, 139);
        text-align: right;
        margin: 20px 0 0 0;
    }
    .readmore:hover {
        color: green;
    }
</style>