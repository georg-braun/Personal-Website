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

<div class="w-[600px]">
	<div class="flex   ">
		<!-- Image-->
		<div class="max-w-[200px] min-w-[200px] mt-8 ">
			{#if imagePath == ''}
				<div class="text-center">No image yet</div>
			{:else}
				<img src={imagePath} class="mx-auto" alt="Profile" />
			{/if}
		</div>

		<!-- Text Column-->
		<div class="px-2">
			<div>
				<p class="text-xl font-semibold my-auto ">{title}</p>
			</div>
			<div class="">{date}</div>
			<div class="flex">
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
			<div class="flex flex-wrap mb-3 opacity-50">
				<div class="mr-2">
					Tags:
				</div>
				{#each tags as tag}
					<div class="mr-2">{tag}</div>
				{/each}
			</div>
			{/if}
			<div>
				{description}
			</div>
		</div>
	</div>
</div>
