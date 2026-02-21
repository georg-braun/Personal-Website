<script>
    import dayjs from "dayjs";
    import { getTagColor } from "$lib/utils/tags";

    let { post } = $props();
</script>

<div class="posts-list__date">
    {dayjs(post.meta.date).format("YYYY-MM-DD")}
</div>
<div>
    <a href={post.path}>
        {post.meta.title}
    </a>
</div>
<div />
<div class="tag-container">
    {#if post.meta.tags}
        {#each post.meta.tags as tag}
            <div class="tag" style="background-color: {getTagColor(tag)};">
                {tag}
            </div>
        {/each}
    {/if}
</div>

<style>
    .posts-list__date {
        text-align: right;
        margin-right: 20px;
    }

    .posts-list__date {
        text-align: right;
        margin-right: 20px;
    }

    .tag-container {
        display: flex;
        font-size: small;
        gap: 5px;
    }

    .tag {
        border: solid;
        border-width: 1px;
        border-radius: 10px;
        padding: 0px 6px;
    }
</style>
