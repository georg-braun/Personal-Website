<script>
	import Project from "./Project.svelte";

    export let name;
    export let projects;
</script>

<div class="category">

    <h2 class="category__name">{name}</h2>
    <div class="line" />
    {#each projects as project}
    <div class="project-container">
        <Project project={project} />
    </div>
    {/each}
</div>


<style>
.project-container{
    margin-bottom: 20px;
}

.category{
    margin-bottom: 100px;
}

.category__name{
    margin: 0px;
}

.line{
        max-width: 800px;
        height: 1px;
        background-color: black;

        margin-top: 0px;
        margin-bottom: 0px;
    }
</style>