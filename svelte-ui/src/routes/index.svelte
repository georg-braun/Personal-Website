<script context="module">
	import { getAllPosts } from '../blog/posts';
	export async function load() {
		const posts = getAllPosts();
		return posts;
		//return { props: { posts: posts } };
	}
</script>

<script>
	import Project from '../components/project.svelte';
	export let posts;
</script>

<div>
	<h1 class="text-3xl mb-5">Recent posts</h1>
	<div class="ml-5">
		{#each posts as post}
			{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined}
				<li><a href={post.route}>{post.metadata.title} ({post.metadata.date})</a></li>
			{/if}
		{/each}
	</div>
	<h1 class="text-3xl mt-10 mb-5">Projects</h1>
	<div class="flex flex-wrap justify-center">
		<Project
			title="Garage Buddy"
			imagePath="garage-buddy-project.png"
			repoUrl="https://github.com/georg-braun/garage-buddy"
			projectUrl="https://garage-buddy.georg-braun.de/"
			tags={['react', 'next.js', 'firebase']}
			description="A web application for managing vehicle maintenances. Pending maintenances are highlighted. A nice side effect of this project was to learn more about react, next.js, firebase."
		/>
	</div>
</div>
