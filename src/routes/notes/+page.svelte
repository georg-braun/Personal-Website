<script>
 export let data;


    $: postsByTag = mapPostsToTag(data?.posts);

    const mapPostsToTag = (posts) => {
        const postsByTagDictionary = {};
        if (posts == undefined) return;

        posts.forEach((post) => {
            const tags = post?.meta.tags;
            if (tags == undefined) return;

            tags.forEach((tag) => {
                if (postsByTagDictionary[tag] == undefined)
                    postsByTagDictionary[tag] = [];

                postsByTagDictionary[tag].push(post);
            });
        });
    
        return postsByTagDictionary;
    };
</script>

<div class="posts__header">Notes by category</div>

{#if !!postsByTag}
    <div class="posts-by-tag">
        {#each Object.keys(postsByTag) as tag}
            <div class="posts-by-tag__tag">{tag}</div>

            <div>
                {#each postsByTag[tag] as post}
                    <div class="posts-by-tag__post-title">
                        <a href={post.path}>
                            {post.meta.title}
                        </a>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
{/if}

<style>
  .posts__header {
        margin-top: 40px;
        font-size: larger;
        text-align: center;
    }

    .posts-list {
        margin-top: 40px;

        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 10px;
    }
    .posts-by-tag {
        margin-top: 40px;

        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 10px;
    }

    .posts-by-tag__post-title {
        margin-bottom: 20px;
    }

    .posts-by-tag__tag {
        text-align: right;
        margin-right: 20px;
    }
</style>