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
	<div class="mb-2 text-center">
		<input class="border rounded" type="text" placeholder="Filter" bind:value={searchValue} />
	</div>

	<div class="flex flex-wrap justify-center">
		{#each posts as post}
			{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined && postMeetsSearchCriteria(post.metadata, searchValue)}
				<div class="w-full md:w-1/3 border-solid border-2 overflow-clip shadow-xl rounded-md m-8 hover:-translate-y-2 duration-300">
					<a href={post.route}>
						<div>
							<div class="">
								<div class="">
									<div class="w-auto h-0 bg-red-400" />
								</div>
								<div class="mx-4 mt-2">
									<p class="text-xl font-semibold ">{post.metadata.title}</p>
									<div class="my-4">
										<span>{new Date(post.metadata.date).toLocaleDateString()}</span>
										<span>|</span>
										{#if post.metadata.tags != undefined}
											{#each post.metadata.tags as tag}
												<span class="mr-1">{tag}</span>
											{/each}
										{/if}
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
			{/if}
		{/each}
	</div>
</div>
