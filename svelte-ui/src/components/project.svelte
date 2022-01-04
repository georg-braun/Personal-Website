<script>
	import Tag from './tag.svelte';

	export let title = 'Projekt';
	export let description = 'Projektbeschreibung';
	export let imagePath = 'default-project-image.png';
	export let tags = [];
</script>

<div class="border-solid border-2 overflow-clip shadow-xl  rounded-md  md:w-1/3 m-4">
	<div>
		<img src={imagePath} alt="Profile picture" />
		<div class="p-2">
			<p class="text-xl font-semibold ">{title}</p>
			<p class="text-sm">2021</p>
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
