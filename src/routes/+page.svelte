<script>
    import PostEntry from "$lib/components/PostEntry.svelte";
    export let data;

    const numberOfVisibleRecentPosts = 10;
    $: postsByTag = mapPostsToTag(data?.posts);
    $: recentNPosts = data?.posts.slice(0, numberOfVisibleRecentPosts);

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

<div class="introduction">
    <div class="image-container hide">
        <img src="/avatar.png" alt="Profile" width="150px" />
    </div>
    <div class="home-introduction-container">
        👋 Welcome to my place. Here I primarily write about web technologies
        and dotnet stuff. At <a href="/projects">/projects</a> you can find some
        things I made and navigating to <a href="/aboutme">/aboutme</a> I share some
        personal insights.
    </div>
</div>

<div class="line" />

<div class="home-introduction-container" title="Readings should be simple">
    I like simple posts that don't overwhelm the reader. A post should be
    readable within a coffee break <iconify-icon icon="lucide:coffee" />
</div>

<div class="posts__header">
    Recent {numberOfVisibleRecentPosts} posts
</div>
<div class="posts-list">
    {#each recentNPosts as post}
        <PostEntry {post} />
    {/each}
</div>

<div class="posts__header">Posts by category</div>

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
    @media (max-width: 600px) {
        .hide {
            display: none;
        }
    }
    .introduction {
        display: flex;
    }
    .home-introduction-container {
        text-align: center;
        margin: auto;
    }

    .line {
        width: 90%;
        height: 1px;
        background-color: black;

        margin-left: auto;
        margin-right: auto;

        margin-top: 20px;
        margin-bottom: 20px;
    }

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
