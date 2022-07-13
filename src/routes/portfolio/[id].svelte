<script context="module">
    export const load = async ({ fetch, params }) => {
        let id = params.id; 
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
  import { page } from '$app/stores';
  let id = $page.params.id;
  let newId = --id;
  console.log(newId);
  export let project = projects[newId];
</script>



<div class="post">
    <h2>{project.title}</h2>
    <p>{project.body.substring(0, 80)}</p>
    <p class="readmore"><a style=" color: rgb(10, 10, 139);" href={`/portfolio/${project.id}`}>Read More</a></p>
</div> 


<style>
    .container {
        max-width: 900px;
        margin: 50px auto;
    }
</style>





