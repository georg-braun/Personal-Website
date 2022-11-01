<script lang="ts">
	import '../app.css';
	import '../prism.css';

	let y;
</script>

<svelte:window bind:scrollY={y} />
<main>
	<div class="flex border-b-4 sticky top-0  backdrop-blur-md">
	
		{#if y == 0}
			<div class="w-36 hover:translate-x-6 duration-300 ">
				<img src="/avatar.png" alt="Profile" />
			</div>
			<div class="my-auto">
				<div class="mt-2 text-lg">Georg Braun</div>
				<div class="mt-2 text-xs">Software enginner | TRY IT!</div>
			</div>
		{:else}
			<div class="w-20 ">
				<img src="/avatar.png" alt="Profile" />
			</div>
			<div class="my-auto">
				<div class="mt-2 text-lg">Georg Braun</div>
			</div>
		{/if}
		<div class="flex ml-auto my-auto mr-10">
			<a href="/"><div class="hover:-translate-y-1 duration-300">Blog</div></a>
			<a class="ml-4" href="/stuff"><div class="hover:-translate-y-1 duration-300">Stuff</div> </a>
			<a class="ml-4" href="/about"><div class="hover:-translate-y-1 duration-300">About</div></a>
		</div>
		
	
	</div>

	<div class="mt-10">
		<div class="w-full md:w-4/6">
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
