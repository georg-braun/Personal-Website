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
	<h1 class="text-center text-3xl mb-5">Recent posts</h1>
	<div class="text-center">
		{#each posts as post}
			{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined}
				<li><a href={post.route}>{post.metadata.title} ({post.metadata.date})</a></li>
			{/if}
		{/each}
	</div>
	<h1 class="text-center text-3xl mt-10 mb-5">Projects</h1>
	<div class="flex flex-wrap justify-center">
		<Project
			title="Garage Buddy"
			imagePath="garage-buddy-project.png"
			description="Eine Webanwendung zum Verwalten von Fahrzeug-Inspektionen. Demnächst anstehende Inspektionen
	werden hervorgehoben. Es war ein Hobby-Projekt um mehr über React, Next.js und Firebase zu
	lernen."
		/>
	</div>
</div>
