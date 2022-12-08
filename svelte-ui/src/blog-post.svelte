<script>
	import './blog-post.css';
	export let title = 'Default title';
	export let date = '';
	export let tags;

	const dateFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
</script>

<div class="mb-4 bg-gray-800 pt-4 pb-1 -mt-10">
	<p class="mt-4 text-center">
		{new Date(date).toLocaleDateString('en-US', dateFormatOptions)}
	</p>
	<p class="text-4xl text-center">{title}</p>
	<!-- <p class="text-center">tags: {tags}</p> -->
</div>
<div class="blog-post container mx-auto md:w-2/4">
	<div class="mx-2">
		<slot />
	</div>
</div>
