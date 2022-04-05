<script context="module">
	import { getLatestFivePostsDescByDate } from '../blog/markdownFilesToPosts';
	// execute before the component is initialized
	export async function load() {
		const postsByDescDate = getLatestFivePostsDescByDate();
		// pass the post data as props to the component
		return { props: { posts: postsByDescDate } };
	}
</script>

<script>
	import Projects from '../components/projects.svelte';

	export let posts;
</script>

<div>
	<h1 class="text-3xl mb-5">Projects</h1>
	<Projects />
</div>
