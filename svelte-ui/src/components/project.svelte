<script>
	import Tag from './tag.svelte';
	import Icon from '@iconify/svelte';
	import { is_empty } from 'svelte/internal';

	export let title = 'Projekt';
	export let description = 'Projektbeschreibung';
	export let imagePath = 'default-project-image.png';
	export let repoUrl = 'https://github.com/georg-braun';
	export let projectUrl = '';
	export let date = '';
	export let tags = [];
</script>

<div class="border-solid border-2 overflow-clip shadow-xl  rounded-md  md:w-1/3 m-4">
	<div>
		<img src={imagePath} alt="Profile picture" />

		<div class="p-2">
			<p class="text-xl font-semibold ">{title}</p>
			<div class="align-middle">
				<span class="align-middle">{date}</span>
				<a target="_blank" rel="noopener noreferrer" href={repoUrl}
					><Icon class="inline align-middle text-xl" icon="akar-icons:github-fill" /></a
				>
				{#if projectUrl != ''}
					<a target="_blank" rel="noopener noreferrer" href={projectUrl}>
						<Icon class="inline align-middle text-xl" icon="ci:external-link" />
					</a>
				{/if}
			</div>
			<p class="mt-2">
				{description}
				<!-- Link zum Blog-Post -->
			</p>
			<div class="flex mt-2">
				{#each tags as tag}
					<Tag tagName={tag} />
				{/each}
			</div>
		</div>
	</div>
</div>
