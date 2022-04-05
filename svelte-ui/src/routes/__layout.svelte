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
				<div class="w-full sm:w-auto mt-2 sm:mt-0">
					<p class="text-center">
						<a href="/">start</a>
						<a class="ml-2" href="/blog">blog</a>
						<a class="ml-2" href="/projects">projects</a>
						<a class="ml-2" href="/about">about</a>
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
