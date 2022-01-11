<script>
	import './blog-post.css';
	export let title = 'Default title';
	export let date = '';
</script>

<div class="blog-post container mx-auto md:w-4/5">
	<div class="mb-8">
		<h1 class="text-4xl">{title}</h1>
		<p>{new Date(date).toLocaleDateString()}</p>
	</div>
	<slot />
</div>
