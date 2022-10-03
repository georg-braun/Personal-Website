<script lang="ts">
	import { text } from 'svelte/internal';
	import '../app.css';
	import '../prism.css';
</script>

<main>
	<div class="ml-4 mt-4 mb-4">
		<span>
			<a class="" href="/">Blog</a>
			<a class="ml-4" href="/projects">Projects</a>
			<a class="ml-4" href="/about">About</a>
		</span>
	</div>
	<div class="flex">
		<div class="w-2/3">
			<slot />
		</div>
		<!--<div class="flex  items-center text-center">
			<div>
				<div class="w-28 mx-auto">
					<img src="/avatar.png" alt="Profile" />
				</div>
				<div class="">Georg Braun</div>
				<div class="">Aachen</div>
			</div>
			<div class="w-full sm:w-auto mt-2 font-sans  sm:my-auto text-sm pb-4 sm:mb-0" />

			<div />
		</div>
	-->
	</div>
	<div class="pt-8 text-center">
		<a href="/impressum">impressum</a>
	</div>
</main>
