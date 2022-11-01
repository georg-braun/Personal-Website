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

<div class="border-solid border-2 overflow-clip shadow-xl rounded-md w-full m-8">
	<div>
		<div class="flex md:flex-nowrap flex-wrap-reverse">
			<div class="w-fit max-w-sm md:w-1/3 mx-auto">
				{#if imagePath == ""}
					<div class="text-center">No image yet</div>			
				{:else}
					<img src={imagePath} class="mx-auto" alt="Profile" />
				{/if}
				
			</div>
			<div class="md:w-2/3 ml-4 mt-2">
				<p class="text-xl font-semibold ">{title}</p>
				<div class="align-middle">
					<span class="align-middle">{date}</span>
					{#if repoUrl != ''}
						<a target="_blank" rel="noopener noreferrer" href={repoUrl}
							><Icon class="inline align-middle text-xl" icon="akar-icons:github-fill" /></a
						>
					{/if}
					{#if projectUrl != ''}
						<a target="_blank" rel="noopener noreferrer" href={projectUrl}>
							<Icon class="inline align-middle text-xl" icon="ci:external-link" />
						</a>
					{/if}
				</div>
				<div class="my-2 pr-6">
					{description}
				</div>
			</div>
		</div>
	</div>
</div>
