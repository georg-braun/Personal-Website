<script>
	import Tag from './tag.svelte';
	import Icon from '@iconify/svelte';
	import { is_empty } from 'svelte/internal';

	export let title = 'Projekt';
	export let description = 'Projektbeschreibung';
	export let imagePath = 'default-project-image.png';
	export let repoUrl = '';
	export let projectUrl = '';
	export let date = '';
</script>

<div class="border-solid border-0 overflow-clip rounded-md mb-10 w-3/4 mx-auto">
	<div class="flex w-ful bg-gray-800 p-2 ">
		
		<div>
			<p class="text-xl font-semibold my-auto ">{title}</p>
		</div>
		<div class="my-auto mx-4">({date})</div>
		<div class="ml-auto  my-auto">
			{#if repoUrl != ''}
				<a target="_blank" rel="noopener noreferrer" href={repoUrl}
					><Icon class="inline align-middle text-xl" icon="akar-icons:github-fill" /></a
				>
			{/if}
		</div>
		<div class="my-auto ml-2">
			{#if projectUrl != ''}
				<a target="_blank" rel="noopener noreferrer" href={projectUrl}>
					<Icon class="inline align-middle text-xl" icon="ci:external-link" />
				</a>
			{/if}
		</div>

	</div>

	<div class="grid grid-cols-3">
		<div class="col-span-1 mb-auto">
			{#if imagePath == ''}
				<div class="text-center">No image yet</div>
			{:else}
				<img src={imagePath} class="mx-auto" alt="Profile" />
			{/if}
		</div>

		<div class="col-span-2 pt-0 p-4">
			{description}
		</div>
	</div>
</div>
