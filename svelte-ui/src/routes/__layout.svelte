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
				<div class="w-full sm:w-auto mt-2 sm:mt-0 font-mono text-sm text-gray-400">
					{'{'}<br>
					<div class="ml-8">title: "Georg Braun",</div>
					<div class="ml-8">sites: [ 
						"<a class="underline text-black" href="/">start</a>", 
						"<a class="underline text-black" href="/blog">blog</a>", 
						"<a class="underline text-black" href="/projects">projects</a>", 
						"<a class="underline text-black" href="/about">about</a>" ],</div>
					<div class="ml-8 ">content: [ "software", "architecture", "C#", "DevOps", "projects", "opinions", "share knowledge"]</div>
					{'}'}
					<p class="text-center">
						
						
						
						
					</p>
				</div>
				<div class="mx-auto sm:ml-auto sm:mr-10">
					<h3>I ❤️🛠️</h3>
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
