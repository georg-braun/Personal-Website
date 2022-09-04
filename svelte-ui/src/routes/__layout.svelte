<script lang="ts">
	import { text } from 'svelte/internal';
	import '../app.css';
	import '../prism.css';

	let darkModeActive;
</script>

<main class={darkModeActive ? 'dark' : ''}>
	<div class="flex flex-col dark:text-white  ">
		<div class="w-full ">
			<!-- Dark/Light Mode -->
			<div class="absolute right-2 top-2 text-xs opacity-50">
				<button on:click={() => (darkModeActive = !darkModeActive)}>{darkModeActive ? "Light mode" : "Dark mode"}</button>
			</div>
			<div class="flex flex-wrap items-center text-center bg-slate-100 dark:bg-slate-900">
				<div class="w-full sm:w-40">
					<div class="w-40 mx-auto">
						<img src="/avatar.png" alt="Profile" />
					</div>
				</div>
				<div
					class="w-full sm:w-auto mt-2 sm:my-auto font-mono text-sm pb-4 sm:mb-0
					"
				>
					<div class="">Georg Braun</div>
					<div class="mb-2 ">software development</div>
					<div>
						<a class="underline" href="/">blog</a>
						<a class="underline" href="/projects">projects</a>
						<a class="underline" href="/about">about</a>
					</div>

					<p class="text-center" />
				</div>
			</div>
		</div>

		<div class="dark:bg-slate-800">
			<slot />
		</div>
		<div class="pt-8 text-center dark:bg-slate-800">
			<a href="/impressum">impressum</a>
		</div>
		<div />
	</div>
</main>
