<script lang="ts">
	import { text } from 'svelte/internal';
	import '../app.css';
	import '../prism.css';
</script>

<main>
	<div class="flex flex-col">
		<div class="w-full bg-gray-50">
			<div class="flex flex-wrap items-center">
				<div class="w-full sm:w-40">
					<div class="w-40 mx-auto">
						<img src="/avatar.png" alt="Profile" />
					</div>
				</div>
				<div class="w-full sm:w-auto mt-2 sm:my-auto font-mono text-sm">
	
					<div class="ml-8">Georg Braun</div>
					<div class="ml-8"><a class="underline text-black" href="/">start</a>,
						<a class="underline text-black" href="/blog">blog</a>,
						<a class="underline text-black" href="/projects">projects</a>,
						<a class="underline text-black" href="/about">about</a></div>
					<div class="ml-8 ">topics: [🛠️ with c#, go, svelte]</div>
		
					<p class="text-center">
						
						
						
						
					</p>
				</div>
			</div>
		</div>

		<div class="container mx-auto mt-8 p-4">
			<slot />
		</div>
		<div class="container mx-auto mt-8 text-center">
			<a href="/impressum">impressum</a>
		</div>
		<div />
	</div>
</main>
