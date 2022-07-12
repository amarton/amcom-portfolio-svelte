<script>
    import MyFirstComponent from "../components/MyFirstComponent.svelte";

    import Reactivity from "../components/reactivity.svelte";

    import EachExample from "../components/each.svelte";

</script>

<h1>Components and if/else</h1>

Call in our component from src/components/MyFirstComponent:
<br>
<MyFirstComponent />
<br>
Now we have a simple counter we can add anywhere to our application. We have also added an if then statement based on the counter (not required)
<br><br>
Even better, we can change the default value, since we defined the <code>addToCounter</code> number as a <strong>prop</strong> in our component:
<br>
<MyFirstComponent x={5} />
<br>
Now the component will show 5 as its first value, rather than 0!

<br><br> <strong>Code: see components/MyFirstComponent.svelte</strong> <br>


<hr>

<h1>Reactivity:</h1>
<br>

This button will update with the number of times it has been clicked.
<br> To do this, we use "$" instead of "let"
 <br>
<Reactivity />

<br><br> <strong>Code: see components/reactivity.svelte</strong>




<hr>

<h1>Looping:</h1>
<br>


<EachExample />

<br><br> <strong>Code: see components/each.svelte</strong>