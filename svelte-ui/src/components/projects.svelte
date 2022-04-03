<script>
	import Project from '../components/project-template.svelte';
	import Projects from './projects.json';
	console.log(Projects);
</script>

<div class="flex flex-wrap justify-center">
{#each Projects as project}
	<Project
		title={project.title}
		imagePath={project.imagePath}
		repoUrl={project.repoUrl}
		projectUrl={project.projectUrl}
		date={project.date}
		description={project.description}
	/>
{/each}
	

</div>
