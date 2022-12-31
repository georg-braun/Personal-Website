<script>
	import Icon from '@iconify/svelte';

	export let title = 'Projekt';
	export let description = 'Projektbeschreibung';
	export let imagePath = 'default-project-image.png';
	export let repoUrl = '';
	export let projectUrl = '';
	export let date = '';
	export let tags = [];
</script>

<div
	class="w-96 h-full border border-solid border-opacity-50 hover:border-opacity-100 transition-all  rounded p-2"
>
	<div class="">
		<div>
			<p class="text-xl font-semibold my-auto ">{title}</p>
		</div>
		<div class="opacity-50">{date}</div>
		<!-- Image-->
		<div class="max-w-[200px] min-w-[200px] mx-auto">
			{#if imagePath == ''}
				<div class="text-center">No image yet</div>
			{:else}
				<img src={imagePath} class="mx-auto" alt="Profile" />
			{/if}
		</div>
		<div>
			{description}
		</div>
		<div class="flex mt-3">
			<div class="my-1">
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
		{#if tags.length > 0}
			<div class="flex flex-wrap mt-2 opacity-50">
				<div class="mr-2">Tags:</div>
				{#each tags as tag}
					<div class="mr-2">{tag}</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
