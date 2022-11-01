<script context="module">
	import { getPostsDescByDate } from '../blog/markdownFilesToPosts';

	export async function load() {
		const posts = getPostsDescByDate();
		return { props: { posts: posts } };
	}
</script>

<script>
	export let posts;
	let searchValue = '';

	function postMeetsSearchCriteria(postMetadata, searchCriteria) {
		if (searchValue === '') return true;
		return (
			postMetadata.title.toUpperCase().includes(searchCriteria.toUpperCase()) ||
			postMetadata.date.toUpperCase().includes(searchCriteria.toUpperCase()) ||
			(postMetadata.tags != undefined &&
				postMetadata.tags.some((_) => _.toUpperCase().includes(searchCriteria.toUpperCase())))
		);
	}
</script>

<div>
	<div class="mb-10 text-center">
		<input class="border rounded" type="text" placeholder="Filter" bind:value={searchValue} />
	</div>

	<div class="">
		{#each posts as post}
			{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined && postMeetsSearchCriteria(post.metadata, searchValue)}
			<a href={post.route}>
				<div class="text-center border rounded-md lg:mx-60 mx-4 mb-10 bg-slate-200 hover:bg-slate-300 duration-200">
					<!-- Title -->
					<div class="py-8 text-xl ">
						{post.metadata.title}
					</div>
					<!-- Further information-->
					<div class="flex flex-wrap place-content-center py-4 bg-white">
						<!-- Date -->
						<div class="">{new Date(post.metadata.date).toLocaleDateString()}</div>
						<!-- Tags -->
						<div class="flex ml-2">
							<span class="mr-2">|</span>
							{#if post.metadata.tags != undefined}
								{#each post.metadata.tags as tag}
									<span class="mr-1">{tag}</span>
								{/each}
							{/if}
						</div>
					</div>
				</div>
				</a>
			{/if}
		{/each}
	</div>
</div>
