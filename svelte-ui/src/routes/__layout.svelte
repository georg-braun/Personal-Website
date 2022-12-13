<script lang="ts">
	import '../app.css';
	import '../prism.css';
</script>

<main>
	<div class=" ">
		<div class="mx-auto mt-auto w-28 ">
			<img src="/avatar.png" alt="Profile" />
		</div>

		<div class="flex mx-auto justify-center p-2 border border-x-0 border-y-4">
			<a href="/"><div>Blog</div></a>
			<a class="ml-4" href="/stuff"><div>Projects</div> </a>
			<a class="ml-4" href="/about"><div>About</div></a>
		</div>
	</div>

	<div class="mt-10">
		<slot />
	</div>
	<div class="pt-8 text-center">
		<a href="/impressum">Impressum</a>
	</div>
</main>
