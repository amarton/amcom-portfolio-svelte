<script>

export let data = []; 
    let { projects } = data;
    $: ({ projects } = data); // so it stays in sync when `data` changes


    //access the date stored in the URL
    import { page } from '$app/stores';
    //access the id sent in the URL and assign it to a param called id
    let id = $page.params.id;
    console.log(id)
    //select only the object where the id = the same as the id sent along in the URL
    $: project = projects.find(p => p.id == id);
</script>



<!-- display the data for the selectd object from the JSON -->
{#if project}
    <h2>{project.title}</h2>
    <p>{project.body}</p>
    <p>{project.tag}</p>
    <img src="../images/{project.image}" style="max-width:300px;"><br>
    <a href="/projects" style=" color:cornflowerblue;">Back to all projects</a>
{/if}