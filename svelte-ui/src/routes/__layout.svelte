<script lang="ts">
	import '../app.css';
	import '../prism.css';

	let scrollY;
	let innerWidth;
	let showBigHeader = true;

	$: {
		// wait some ms to change the header
		setTimeout(() => {
			// avoid that the reszie to the smaller header and the resulting scrollbar position
			// results again in a big header
			const heightDiffInPixelBetweenSmallAndBigHeader = 70;
			//showBigHeader = scrollY <= heightDiffInPixelBetweenSmallAndBigHeader + 100;
		}, 1000);
	}
</script>

<svelte:window bind:scrollY bind:innerWidth />

<main>
	<div class=" ">
		<div class="mx-auto mt-auto w-28 ">
			<img src="/avatar.png" alt="Profile" />
		</div>

		<div class="border border-2" />

		<div class="flex mx-auto justify-center p-2">
			<a href="/"><div>Blog</div></a>
			<a class="ml-4" href="/stuff"><div>Projects</div> </a>
			<a class="ml-4" href="/about"><div>About</div></a>
		</div>
		<div class="border border-2" />
	</div>

	<div class="mt-10">
		<slot />
	</div>
	<div class="pt-8 text-center">
		<a href="/impressum">Impressum</a>
	</div>
</main>
