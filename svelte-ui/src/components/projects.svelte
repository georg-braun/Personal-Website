<script>
	import Project from '../components/project-template.svelte';
	import Projects from './projects.json';
	let showOnlySoftwareProjects;
</script>

<div class="text-center my-14">
	<input type="checkbox" bind:checked={showOnlySoftwareProjects} class="rounded-ful" />
	Show only software stuff 👨‍💻
</div>

<div class="flex flex-wrap justify-center gap-8">
	{#each Projects as project}
		{#if !project.retired && (!showOnlySoftwareProjects || project.category === 'it')}
			<Project
				title={project.title}
				imagePath={project.imagePath}
				repoUrl={project.repoUrl}
				projectUrl={project.projectUrl}
				date={project.date}
				description={project.description}
				tags={project.tags}
			/>
		{/if}
	{/each}
</div>
<h1 class="text-3xl my-20  w-full text-center">Retired projects</h1>
<div class="flex flex-wrap justify-center gap-8">
	{#each Projects as project}
		{#if project.retired && (!showOnlySoftwareProjects || project.category === 'it')}
			<Project
				title={project.title}
				imagePath={project.imagePath}
				repoUrl={project.repoUrl}
				projectUrl={project.projectUrl}
				date={project.date}
				description={project.description}
				tags={project.tags}
			/>
		{/if}
	{/each}
</div>
