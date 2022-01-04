<script context="module">
	function extractRoute(path) {
		return path.replace('./', '').replace('.md', '');
	}

	export async function load() {
		const allPosts = import.meta.globEager(`./blog/**/*.md`);

		// many thanks to https://blog.stranianelli.com/sveltekit-routing-from-other-folders-english/
		const posts = [];
		for (let path in allPosts) {
			const post = allPosts[path];
			const metadata = post.metadata;
			const route = extractRoute(path);
			console.log(route);
			const p = {
				route,
				metadata
			};
			posts.push(p);
		}

		return { props: { posts: posts } };
	}
</script>

<script>
	import Project from '../components/project.svelte';
	export let posts;
	console.log(posts);
</script>

<div>
	<h1>Recent blog posts</h1>
	{#each posts as post}
		{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined}
			<li><a href={post.route}>{post.metadata.title} ({post.metadata.date})</a></li>
		{/if}
	{/each}
	<h1>Projects</h1>
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
