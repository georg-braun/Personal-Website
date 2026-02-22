<script>
	import dayjs from "dayjs";
	import { getTagColor } from "$lib/utils/tags";

	let { data } = $props();
</script>

<div class="blog-header">
	<h1>Blog</h1>
	<p class="blog-subtitle">Ideas, learnings, and things I've built.</p>
</div>

<div class="blog-feed">
	{#each data.posts as post}
		<a href={post.path} class="blog-card">
			<div class="blog-card__date">
				{dayjs(post.meta.date).format("MMM D, YYYY")}
			</div>
			<h2 class="blog-card__title">{post.meta.title}</h2>
			{#if post.meta.tags}
				<div class="blog-card__tags">
					{#each post.meta.tags as tag}
						<span class="blog-card__tag" style="background-color: {getTagColor(tag)};">
							{tag}
						</span>
					{/each}
				</div>
			{/if}
		</a>
	{/each}
</div>

<style>
	.blog-header {
		text-align: center;
		margin-bottom: 40px;
	}

	.blog-header h1 {
		margin-bottom: 4px;
	}

	.blog-subtitle {
		color: rgba(0, 0, 0, 0.5);
		font-size: 1rem;
		margin-top: 0;
	}

	.blog-feed {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.blog-card {
		display: block;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 8px;
		padding: 20px 24px;
		text-decoration: none;
		color: inherit;
		transition: background-color 0.15s ease, box-shadow 0.15s ease;
	}

	.blog-card:hover {
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		text-decoration: none;
	}

	.blog-card__date {
		font-size: 0.85rem;
		color: rgba(0, 0, 0, 0.45);
		margin-bottom: 4px;
	}

	.blog-card__title {
		font-size: 1.15rem;
		font-weight: 600;
		margin: 0;
		color: var(--color-text);
	}

	.blog-card__tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 10px;
	}

	.blog-card__tag {
		font-size: 0.75rem;
		border: 1px solid rgba(0, 0, 0, 0.15);
		border-radius: 10px;
		padding: 2px 8px;
	}
</style>
