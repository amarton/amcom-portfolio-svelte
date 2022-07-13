<script context="module">
    
    //fetch your json file
    export const load = async ({ fetch, params }) => {
        const res = await fetch('../port.json');
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
    //pull in data from the page data store
        //the id was passed in the url
    import { page } from '$app/stores';
    //access the id sent in the URL
    let id = $page.params.id;
    //subtract one from the ID
    let newId = --id;
    console.log(newId);
    //use the prop project to hold the json object with the correcponding row number. 
        //This might look like : projects[0], displaying the first object in the JSON.
            //This only works if every object in the json file has an incremental id starting with 1.
                //this is not the best way. Would be better if we could choose based off the assigned id
    export let project = projects[newId];
</script>



<div class="post">
    <h2>{project.title}</h2>
    <p>{project.body}</p>
    <p>{project.tag}</p>
    <img src="../images/{project.image}" style="max-width:300px;"><br>
    <a href="/projects" style=" color:cornflowerblue;">Back to all projects</a>

</div> 


<style>
    .container {
        max-width: 900px;
        margin: 50px auto;
    }
</style>





