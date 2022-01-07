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
						<img src="/avatar.png" alt="Profile picture" />
					</div>
				</div>
				<div class="w-full sm:w-auto mt-2 sm:mt-0">
					<p class="text-center">
						<a href="/">projects</a>
						<a class="ml-2" href="/blog">posts</a>
						<a class="ml-2" href="/about">about</a>
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
