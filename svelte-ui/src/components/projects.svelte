<script>
	import Project from '../components/project-template.svelte';
	import Projects from './projects.json';
	let showOnlySoftwareProjects;
</script>

<div>
	<input type="checkbox" bind:checked={showOnlySoftwareProjects} class="rounded-ful" />
	Show only software stuff
</div>

<div class="flex flex-wrap ">
	{#each Projects as project}
		{#if !showOnlySoftwareProjects || project.category === 'it'}
			<Project
				title={project.title}
				imagePath={project.imagePath}
				repoUrl={project.repoUrl}
				projectUrl={project.projectUrl}
				date={project.date}
				description={project.description}
			/>
		{/if}
	{/each}
</div>
