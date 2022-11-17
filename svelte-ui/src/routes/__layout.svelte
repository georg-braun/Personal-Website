<script lang="ts">
	import '../app.css';
	import '../prism.css';

	let scrollY;
	let showBigHeader = true;

	$: {
		// wait some ms to change the header
		setTimeout(() => {
			// avoid that the reszie to the smaller header and the resulting scrollbar position
			// results again in a big header
			const heightDiffInPixelBetweenSmallAndBigHeader = 70;
			showBigHeader = scrollY <= heightDiffInPixelBetweenSmallAndBigHeader + 100;

		}, 100);
	}
</script>

<svelte:window bind:scrollY={scrollY} />

<main>
	<div class="flex border-b-4 sticky top-0  backdrop-blur-md">
		<div class="{showBigHeader ? 'w-36' : 'w-20'} hover:translate-x-3 duration-300 ">
			<img src="/avatar.png" alt="Profile" />
		</div>
		<div class="my-auto">
			<div class="text-lg">Georg Braun</div>
			<div class="{showBigHeader ? 'mt-2 text-xs' : 'invisible h-0'} ">Software engineer | Architecture, DDD, Web</div>
		</div>

		<div class="flex ml-auto my-auto mr-10">
			<a href="/"><div class="hover:-translate-y-1 duration-300">Blog</div></a>
			<a class="ml-4" href="/stuff"><div class="hover:-translate-y-1 duration-300">Stuff</div> </a>
			<a class="ml-4" href="/about"><div class="hover:-translate-y-1 duration-300">About</div></a>
		</div>
	</div>


	<div class="mt-10">
		<div>
			<slot />
		</div>
		<div>
			<div class="text-center fixed top-20 right-20 invisible md:visible">
				<div class="w-full sm:w-auto mt-2 font-sans  sm:my-auto text-sm pb-4 sm:mb-0" />
				<div />
			</div>
		</div>
	</div>
	<div class="pt-8 text-center">
		<a href="/impressum">impressum</a>
	</div>
</main>
