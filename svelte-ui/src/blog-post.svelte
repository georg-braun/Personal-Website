<script>
	import './blog-post.css';
	export let title = 'Default title';
	export let date = '';
	export let tags;
</script>

<div class="mb-8 bg-slate-600 py-4  -mt-10">
	<p class="text-4xl text-center">{title}</p>
	<p class="mt-4 text-center">written: {new Date(date).toLocaleDateString()}</p>
	<!-- <p class="text-center">tags: {tags}</p> -->
</div>
<div class="blog-post container mx-auto w-2/4">
	<slot />
</div>
