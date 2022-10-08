<script lang="ts">
	import { text } from 'svelte/internal';
	import '../app.css';
	import '../prism.css';
</script>

<main>
	<div class="ml-4 mt-4 mb-4">
		<span>
			<a class="" href="/">Blog</a>
			<a class="ml-4" href="/stuff">Stuff</a>
			<a class="ml-4" href="/about">About</a>
		</span>
	</div>
	<div class="mt-10">
		<div class="w-full md:w-4/6">
			<slot />
		</div>
		<div>
			<div class="text-center fixed top-20 right-20 invisible md:visible">
				<div>
					<div class="w-36 mx-auto">
						<img src="/avatar.png" alt="Profile" />
					</div>
					<div class="mt-2 text-lg">Georg Braun</div>
					<div class="mt-2 text-gray-500 text-xs">TRY IT!</div>
					
				</div>
				<div class="w-full sm:w-auto mt-2 font-sans  sm:my-auto text-sm pb-4 sm:mb-0" />

				<div />
			</div>
		</div>
	</div>
	<div class="pt-8 text-center">
		<a href="/impressum">impressum</a>
	</div>
</main>
