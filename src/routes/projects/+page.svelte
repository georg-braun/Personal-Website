<script>
	import ProjectCategory from "$lib/components/project/ProjectCategory.svelte";
import projects from "./projects.json"
</script>

<ProjectCategory name="Side web projects" projects={projects.webApplications} />
<ProjectCategory name="Desktop Applications" projects={projects.desktopApplications} />
<ProjectCategory name="Handcraft" projects={projects.handcraft} />
<ProjectCategory name="Bicycle" projects={projects.bicycle} />


<style>

</style>