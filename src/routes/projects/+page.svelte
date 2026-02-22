<script>
	import ProjectCategory from "$lib/components/project/ProjectCategory.svelte";
	import projects from "./projects.json";
</script>

<div class="projects-header">
	<h1>Projects</h1>
	<p class="projects-subtitle">Things I've built — software, handcraft, and adventures.</p>
</div>

<ProjectCategory name="Web Applications" projects={projects.webApplications} />
<ProjectCategory name="Desktop Applications" projects={projects.desktopApplications} />
<ProjectCategory name="Handcraft" projects={projects.handcraft} />
<ProjectCategory name="Bicycle" projects={projects.bicycle} />

<style>
	.projects-header {
		text-align: center;
		margin-bottom: 40px;
	}

	.projects-header h1 {
		margin-bottom: 4px;
	}

	.projects-subtitle {
		color: rgba(0, 0, 0, 0.5);
		font-size: 1rem;
		margin-top: 0;
	}
</style>
