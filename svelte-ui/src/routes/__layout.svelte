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

<svelte:window bind:scrollY bind:innerWidth  />

<main>
	<div class="flex backdrop-blur-md flex-shrink-0 flex-wrap">
		<div class="hover:translate-x-3 duration-300 mx-auto mt-auto w-28 ">
			<img src="/avatar.png" alt="Profile" />
		</div>

		<div class="my-auto mx-auto text-center">
			<div class="text-lg">Georg Braun</div>
			<div class="{showBigHeader ? 'mt-2 text-xs' : 'invisible h-0'} ">
				<div>Software engineer | solve problems</div>
				<div>❤️ dotnet, svelte, web, build, simplicity</div>
			</div>
		</div>

		<div class="flex mx-auto sm:my-auto py-2">
			<a href="/"><div>Blog</div></a>
			<a class="ml-4" href="/stuff"><div>Stuff</div> </a>
			<a class="ml-4" href="/about"><div>About</div></a>
		</div>
	</div>

	<div class="mt-10">
		<slot />
	</div>
	<div class="pt-8 text-center">
		<a href="/impressum">impressum</a>
	</div>
</main>
