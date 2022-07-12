<script>
    let locations = [ 
        {
            country: "UK",
            city: "London",
        },
        {
            country: "India",
            city: "Mumbai"
        },
        {
            country: "France",
            city: "Paris"
        }
    ];
</script>

Here we take some data, defined above, and use EACH to create a loop and iterate through and display the data

<div id="data">
    {#each locations as { country, city }, i}
		<div class="county-city">
			{i + 1}: {country}, {city}
		</div>
    {/each}
</div>


Here we do the same thing, except using keys
<div id="data">
    {#each locations as location, i}
		<div class="county-city">
			{i + 1}: {location.country}, {location.city}
		</div>
    {/each}
</div>

See more <a href="https://fjolt.com/article/svelte-each-logic">here</a>

<style>
    #data {
        padding: 2rem;
        border-radius: 10px;
        border: 1px solid #eee;
    }
</style>
