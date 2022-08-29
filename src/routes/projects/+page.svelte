<!-- src/routes/Projects.svelte -->
<svelte:head>
	<title>Projects</title>
</svelte:head>

<script>
    //export the json to a prop
    export let data; 
    let { projects } = data;
    $: ({ projects } = data); // so it stays in sync when `data` changes

</script>


<div class="container">
    <h1>My Projects</h1> 

    <div class="posts">
        <!-- loop through the json and display-->
        {#each projects as project}
        <div class="post">
            <h2>{project.title}</h2>
            <p>{project.body.substring(0, 80)}</p>
            <img src="../images/{project.image}" style="max-width:300px;">
            <p class="readmore"><a style=" color:cornflowerblue;" href={`/portfolio/${project.id}`}>Read More</a></p>
        </div> 
        {/each}
    </div>
</div>



<style>
    .container {
        max-width: 800px;
        margin: 50px auto;
    }
    .posts {
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